const fs = require('fs');
var crawl = require('./lib/crawl');
var screenshot = require('./lib/screenshot');

module.exports = function(params) {
  //Sets up variables from params
  var dir = params.dir || __dirname + '/';
  var depth = params.depth || '3' ;
  var url = params.url || '' ;
  var width = params.width || 1080;
  var height = params.height || 1920;

  //Makes folder if it doesnt exist
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }

  var urls = crawl.StartCrawler(url, depth, function(urls){
    screenshot.screenshotter(url, urls, dir, width, height, function(){
      console.log("COMPLETE")
    });
  });
};
