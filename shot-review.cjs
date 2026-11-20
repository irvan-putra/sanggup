const {chromium} = require('playwright');
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CHROME_PATH,headless:true,args:['--no-sandbox']});
 const page=await browser.newPage({viewport:{width:390,height:844}});
 await page.goto('https://vanipy.com/sanggup/review/tools/?x='+Date.now());
 await page.locator('.card').first().waitFor();
 await page.screenshot({path:'/tmp/review-top.png'});
 await page.locator('h2',{hasText:'New since'}).scrollIntoViewIfNeeded();
 await page.screenshot({path:'/tmp/review-mid.png'});
 await browser.close();
})();
