const Crawler = require("js-crawler");

module.exports = {
StartCrawler:function(url, depth, callback) {
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
        // return urls;
        return callback(crawledUrls);
      }
    });
  }
}
