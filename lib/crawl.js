const Crawler = require("js-crawler");

exports.StartCrawler= function (url, depth){
  var urls = '';
  var crawler = new Crawler().configure({
    depth: depth
  });
  crawler.crawl({
    url: url,
    success: function(page) {
      // console.log('FOUND: ' +page.url);
    },
    failure: function(page) {
      console.log("FAIL:  "+ page.url + " STATUS: " + page.status);
    },
    finished: function(crawledUrls) {
      console.log('TOTAL: '+ crawledUrls.length);
      urls = crawledUrls;
    }
  });
  return urls;
}
