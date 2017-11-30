// var website; 
var prompt = require('prompt');
var crawl = require('crawl');
var webshot = require('webshot');
prompt.start();
prompt.get(['site'], function (err, result) {
  var site=result.site;
  console.log('site: ' + site);
    webshot(site, site +'.png', function(err) {
  });
});