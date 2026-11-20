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
async function openTile(page,name){
 const direct=page.getByRole('button',{name});
 if(await direct.count()===0){ await page.getByRole('button',{name:/^Career,/}).click(); }
 await page.getByRole('button',{name}).click();
}
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));
 const browser=await chromium.launch({executablePath:process.env.CHROME_PATH||undefined,headless:true,args:['--no-sandbox']});
 try {
 const page=await browser.newPage({viewport:{width:390,height:844}});
 const errors=[]; page.on('pageerror',e=>errors.push(e.message));
 const url=process.env.TEST_URL||`http://127.0.0.1:${server.address().port}`;
 await page.goto(url);
 assert.equal(await page.locator('.track-card:disabled').count(),0);
 assert.equal(await page.locator('.track-card:not(:disabled)').count(),25);
 await page.getByRole('button',{name:/^Cooking,/}).click();
 assert.equal(await page.locator('.stage-card.locked').count(),6);
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
 assert.equal(await page.locator('.stage-card.locked').count(),4);
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
 await page.getByRole('button',{name:'I did it',exact:true}).click();
 await page.getByRole('button',{name:'I did it',exact:true}).click();
 await page.getByRole('button',{name:'Request sign-off',exact:true}).click();
 await page.getByRole('button',{name:"I'm teaching"}).click();
 await page.locator('.request-row').click();
 await page.getByRole('button',{name:'Sign off',exact:true}).click();
 await page.getByRole('button',{name:"I'm learning"}).click();
 assert.equal(await page.locator('.stage-card.done').count(),7);
 assert.equal(await page.locator('#archive-list .archive-row').count(),7);
 await page.reload();
 assert.match(await page.locator('#path-title').innerText(),/Cooking/);
 assert.equal(await page.locator('.stage-card.done').count(),7);
 await page.locator('#back-to-tracks').click();
 // new tracks: every one has notes and sources, practice stages complete in order, state survives reload
 for (const [name,count,noteRe] of [[/^Home,/,8,/not an official KonMari course/],[/^Decisions and priorities,/,8,/does not rank tasks or make decisions/],[/^Focus and habits,/,15,/Pomodoro/],[/^Projects and business,/,13,/[Nn]ot an official course/],[/^Safety and emergencies,/,18,/does not make you a trained rescuer/],[/^Security basics,/,8,/does not make you a security professional/],[/^Network and community,/,21,/does not contact anyone/],[/^Money and FIRE,/,11,/not personal financial/],[/^Writing and journalism,/,13,/does not write your book/],[/^Swimming,/,4,/No app can teach you to swim/],[/^Driving,/,4,/Reading cannot make you able to drive/],[/^Languages,/,5,/General method/],[/^Music,/,5,/Instrument-neutral/],[/^Math,/,6,/problem-solving method/],[/^Chess,/,6,/Beginner chess/],[/^Branding and creator,/,21,/does not write your profiles/],[/^Self care and calm,/,10,/not a medical service/],[/^Public speaking,/,5,/cannot listen to your talk/],[/^Presentation,/,5,/does not make your slides/],[/^Surveying people,/,5,/does not run surveys/],[/^Teaching and mentoring,/,6,/does not teach for you/],[/^Negotiation,/,5,/does not negotiate for you/],[/^Coding,/,7,/does not run your code/],[/^Career,/,22,/does not apply for jobs/]]) {
  await page.goto(url);
  await openTile(page,name);
  assert.match(await page.locator('#path-note').innerText(),noteRe);
  assert.ok(await page.locator('#path-sources a').count()>=1);
  for(let i=0;i<count;i++) await page.getByRole('button',{name:'I did it',exact:true}).click();
  assert.equal(await page.locator('.stage-card.done').count(),count);
 }
 await page.goto(url);
 await page.getByRole('button',{name:/^Home,/}).click();
 assert.equal(await page.locator('.stage-card.done').count(),8);
 assert.equal(await page.getByRole('button',{name:'Request sign-off',exact:true}).count(),1);
 // every stage card on every path renders real content, never schema gaps like "undefined"
 for (const name of [/^Cooking,/,/^Home,/,/^Decisions and priorities,/,/^Focus and habits,/,/^Projects and business,/,/^Safety and emergencies,/,/^Security basics,/,/^Network and community,/,/^Money and FIRE,/,/^Writing and journalism,/,/^Swimming,/,/^Driving,/,/^Languages,/,/^Music,/,/^Math,/,/^Chess,/,/^Branding and creator,/,/^Self care and calm,/,/^Public speaking,/,/^Presentation,/,/^Surveying people,/,/^Teaching and mentoring,/,/^Negotiation,/,/^Coding,/,/^Career,/]) {
  await page.goto(url);
  await openTile(page,name);
  const cards=await page.locator('.stage-card').allInnerTexts();
  assert.ok(cards.length>=1);
  for (const c of cards) { assert.ok(!/undefined/.test(c), 'undefined text in stage card'); }
 }
 // direct skill links: fresh load on #branding opens that path, back returns to grid, tile click sets hash, unknown hash falls back to grid
 await page.goto(url+'/#branding');
 assert.match(await page.locator('#path-title').innerText(),/Branding and creator/);
 assert.equal(await page.locator('.track-card').count(),0);
 await page.locator('#back-to-tracks').click();
 await page.locator('.track-card:not(:disabled)').nth(24).waitFor();
 assert.equal(await page.locator('.track-card:not(:disabled)').count(),25);
 await page.getByRole('button',{name:/^Money and FIRE,/}).click();
 await page.locator('#path-title').waitFor();
 assert.equal(new URL(page.url()).hash,'#money');
 await page.goto(url+'/#career');
 await page.locator('#path-title').waitFor();
 assert.match(await page.locator('#path-title').innerText(),/^Career/);
 await page.goto(url+'/#languages');
 await page.locator('#path-title').waitFor();
 assert.match(await page.locator('#path-title').innerText(),/^Languages/);
 // section deep links: fresh load on #track/stage opens the track and scrolls the stage into view, in-page anchors do the same
 await page.goto(url+'/#network/cb6');
 await page.locator('#path-title').waitFor();
 assert.match(await page.locator('#path-title').innerText(),/^Network/);
 const jump = page.locator('#stage-cb6');
 await jump.waitFor();
 assert.ok(await jump.evaluate(el=>el.classList.contains('jump-target')));
 const jbox = await jump.boundingBox();
 assert.ok(jbox && jbox.y >= 0 && jbox.y < page.viewportSize().height, 'jump target scrolled into view');
 await page.goto(url+'/#branding');
 await page.locator('#stage-mk7 a[href="#network/n3"]').click();
 await page.locator('#stage-n3.jump-target').waitFor();
 assert.equal(new URL(page.url()).hash,'#network/n3');
 await page.goto(url+'/#nope');
 await page.locator('.track-card:not(:disabled)').nth(24).waitFor();
 assert.equal(await page.locator('.track-card:not(:disabled)').count(),25);
 // older saved progress (0.1.x shape) still loads and keeps cooking progress
 await page.goto(url);
 await page.evaluate(()=>localStorage.setItem('sanggup-demo-v1',JSON.stringify({done:{c1:true},archive:[{stageId:'c1',track:'Cooking',title:'Set up before you cook',how:'self',note:'',when:new Date().toISOString()}],requests:[]})));
 await page.reload();
 await page.getByRole('button',{name:/^Cooking,/}).click();
 assert.equal(await page.locator('.stage-card.done').count(),1);
 // pre-merge (25-path) progress and requests survive the merges: stage ids carry done state, old pending sign-off requests resolve and can be signed by code
 await page.goto(url);
 await page.evaluate(()=>localStorage.setItem('sanggup-demo-v1',JSON.stringify({done:{p1:true,p2:true,d1:true,cs1:true,fr1:true,c1:true,ca1:true},archive:[{stageId:'cs1',track:'Consulting',title:'Name the problem you solve',how:'self',note:'',when:new Date().toISOString()}],requests:[{code:'MERGE4',trackId:'consulting',trackTitle:'Consulting',stageId:'cs4',stageTitle:'Milestone: run one real consultation',task:'Run a consultation.',status:'pending',requestedAt:new Date().toISOString()}]})));
 await page.reload();
 await page.getByRole('button',{name:/^Decisions and priorities,/}).click();
 assert.equal(await page.locator('.stage-card.done').count(),3);
 await page.locator('#back-to-tracks').click();
 await openTile(page,/^Career,/);
 assert.equal(await page.locator('.stage-card.done').count(),3);
 assert.match(await page.locator('.code-box').innerText(),/MERGE4/);
 await page.getByRole('button',{name:"I'm teaching"}).click();
 await page.locator('#code-input').fill('MERGE4');
 await page.getByRole('button',{name:'Find request'}).click();
 await page.getByRole('button',{name:'Sign off',exact:true}).click();
 await page.getByRole('button',{name:"I'm learning"}).click();
 await page.goto(url);
 await openTile(page,/^Career,/);
 assert.equal(await page.locator('.stage-card.done').count(),4);
 // shared subskills are labeled in both directions on the paths that practice them
 for (const [name,labelRe] of [[/^Decisions and priorities,/,/also practiced in Focus/],[/^Surveying people,/,/also practiced in Branding and creator/],[/^Career,/,/segment stage in Branding and creator/],[/^Branding and creator,/,/Surveying people path/],[/^Projects and business,/,/Branding and creator, for marketing/],[/^Branding and creator,/,/KPI stage in Projects and business/],[/^Focus and habits,/,/home in Decisions and priorities/],[/^Branding and creator,/,/also practiced in the Career path|also practiced in Career/],[/^Career,/,/also practiced in Network and community/],[/^Network and community,/,/also practiced in the Career path/],[/^Network and community,/,/also practiced in Teaching and mentoring/],[/^Teaching and mentoring,/,/also practiced in Network and community/],[/^Negotiation,/,/also practiced in Network and community/],[/^Network and community,/,/home in the Negotiation path/]]) {
  await page.goto(url);
  await openTile(page,name);
  assert.match(await page.locator('#path-detail, #track-detail, main, body').first().innerText(),labelRe);
 }
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
