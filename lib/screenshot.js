const puppeteer = require('puppeteer');
const nameGen = require('./name');

exports.screenshotter = async function(url, urls, dir, width, height) {
  console.log('here');
  for (var i=0; i < urls.length; i++) {
    if (urls[i].startsWith(url)){
      const browser = await puppeteer.launch({
          headless: true,
          ignoreHTTPSErrors: true,
          timeout: 1000,
          defaultViewport: [
            width= width
          ]
      });
      const page = await browser.newPage();
      await page.setViewport({width, height })

      //Creates the name for the file
      var name = nameGen.nameMaker(urls[i]);

      await page.goto(urls[i]);
      await page.screenshot({path: dir + name, fullPage: true});

      browser.close();
    }
  }
}
