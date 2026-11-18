const {chromium} = require('playwright');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const server = http.createServer((req,res)=>{
 const file=path.join(root,decodeURIComponent(req.url.split('?')[0])==='/'?'index.html':decodeURIComponent(req.url.split('?')[0]));
 if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}
 try {res.setHeader('Content-Type', file.endsWith('.js')?'application/javascript':file.endsWith('.css')?'text/css':file.endsWith('.svg')?'image/svg+xml':'text/html');res.end(fs.readFileSync(file));}catch{res.writeHead(404).end();}
});
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));
 const browser=await chromium.launch({executablePath:process.env.CHROME_PATH||undefined,headless:true,args:['--no-sandbox']});
 try {
 const page=await browser.newPage({viewport:{width:390,height:844}});
 const errors=[]; page.on('pageerror',e=>errors.push(e.message));
 const url=process.env.TEST_URL||`http://127.0.0.1:${server.address().port}`;
 await page.goto(url);
 assert.equal(await page.locator('.track-card:disabled').count(),6);
 assert.equal(await page.locator('.track-card:not(:disabled)').count(),14);
 await page.getByRole('button',{name:/^Cooking,/}).click();
 assert.equal(await page.locator('.stage-card.locked').count(),4);
 await page.getByRole('button',{name:'I did it',exact:true}).click();
 await page.getByRole('button',{name:'I did it',exact:true}).click();
 await page.getByRole('button',{name:'Request sign-off',exact:true}).click();
 const code=await page.locator('.code-box strong').innerText();
 assert.match(code,/^[A-Z2-9]{6}$/);
 await page.getByRole('button',{name:"I'm teaching"}).click();
 await page.getByLabel('Sign-off code from the learner').fill('ZZZZZZ');
 await page.getByRole('button',{name:'Find request'}).click();
 assert.match(await page.locator('#request-detail').innerText(),/No pending request/);
 await page.getByLabel('Sign-off code from the learner').fill(code.toLowerCase());
 await page.getByRole('button',{name:'Find request'}).click();
 await page.getByLabel('Note for the learner').fill('Try once more');
 await page.getByRole('button',{name:'Ask for more practice'}).click();
 await page.getByRole('button',{name:"I'm learning"}).click();
 assert.equal(await page.getByRole('button',{name:'Request sign-off',exact:true}).count(),1);
 assert.equal(await page.locator('.stage-card.locked').count(),2);
 await page.getByRole('button',{name:'Request sign-off',exact:true}).click();
 await page.getByRole('button',{name:"I'm teaching"}).click();
 await page.locator('.request-row').click();
 const note='<img src=x onerror="window.noteExecuted=true">';
 await page.getByLabel('Note for the learner').fill(note);
 await page.getByRole('button',{name:'Sign off',exact:true}).click();
 assert.equal(await page.locator('#signed-list img').count(),0);
 await page.getByRole('button',{name:"I'm learning"}).click();
 assert.equal(await page.locator('.stage-card.done').count(),3);
 assert.equal(await page.getByRole('button',{name:'I did it',exact:true}).count(),1);
 assert.equal(await page.locator('#archive-list img').count(),0);
 assert.ok((await page.locator('#archive-list').innerText()).includes(note));
 await page.getByRole('button',{name:'I did it',exact:true}).click();
 await page.getByRole('button',{name:'Request sign-off',exact:true}).click();
 await page.getByRole('button',{name:"I'm teaching"}).click();
 await page.locator('.request-row').click();
 await page.getByRole('button',{name:'Sign off',exact:true}).click();
 await page.getByRole('button',{name:"I'm learning"}).click();
 assert.equal(await page.locator('.stage-card.done').count(),5);
 assert.equal(await page.locator('#archive-list .archive-row').count(),5);
 await page.reload();
 await page.getByRole('button',{name:/^Cooking,/}).click();
 assert.equal(await page.locator('.stage-card.done').count(),5);
 // new tracks: every one has notes and sources, practice stages complete in order, state survives reload
 for (const [name,count,noteRe] of [[/^Cleaning & tidying,/,5,/not an official KonMari course/],[/^Prioritizing,/,4,/does not rank/],[/^Deciding,/,4,/does not make decisions/],[/^Habits,/,4,/[Nn]ot an official course/],[/^Focus,/,3,/Pomodoro/],[/^Projects,/,4,/[Nn]ot an official course/],[/^Calm & meditation,/,3,/not medical/],[/^Disaster preparedness,/,11,/does not make you a trained rescuer/],[/^First aid awareness,/,4,/does not train or qualify you/],[/^Networking,/,5,/does not contact anyone/],[/^Budgeting & personal finance,/,7,/not personal financial/],[/^FIRE,/,3,/no withdrawal rate is safe/],[/^Writing a book,/,5,/does not write your book/]]) {
  await page.reload();
  await page.getByRole('button',{name}).click();
  assert.match(await page.locator('#path-note').innerText(),noteRe);
  assert.ok(await page.locator('#path-sources a').count()>=2);
  for(let i=0;i<count;i++) await page.getByRole('button',{name:'I did it',exact:true}).click();
  assert.equal(await page.locator('.stage-card.done').count(),count);
 }
 await page.reload();
 await page.getByRole('button',{name:/^Cleaning & tidying,/}).click();
 assert.equal(await page.locator('.stage-card.done').count(),5);
 assert.equal(await page.getByRole('button',{name:'Request sign-off',exact:true}).count(),1);
 // older saved progress (0.1.x shape) still loads and keeps cooking progress
 await page.evaluate(()=>localStorage.setItem('sanggup-demo-v1',JSON.stringify({done:{c1:true},archive:[{stageId:'c1',track:'Cooking',title:'Set up before you cook',how:'self',note:'',when:new Date().toISOString()}],requests:[]})));
 await page.reload();
 await page.getByRole('button',{name:/^Cooking,/}).click();
 assert.equal(await page.locator('.stage-card.done').count(),1);
 for(const width of [320,390,1280]){
 await page.setViewportSize({width,height:900});
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
 if(process.env.SCREENSHOT_DIR) await page.screenshot({path:`${process.env.SCREENSHOT_DIR}/sanggup-path-${width}.png`,fullPage:true});
 }
 assert.equal(await page.evaluate(()=>window.noteExecuted),undefined);
 assert.deepEqual(errors,[]);
 console.log('PASS: planned tracks, ordered gates, code lookup, retry, safe notes, immediate refresh, full path, persistence, 320/390/1280 overflow, no runtime errors');
 } finally {await browser.close();server.close();}
})().catch(e=>{console.error(e);server.close();process.exitCode=1;});
