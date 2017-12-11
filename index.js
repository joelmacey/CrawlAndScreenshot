var webshot = require('webshot');
var options = { shotSize: { height: 'all' } };
var fs      = require('fs');
var url = 'thrifty.co.nz';

console.log('Creating screenshot for URL: ' + url);
var renderStream = webshot(url, options);
var file = fs.createWriteStream(url+'.png', {encoding: 'binary'});
renderStream.on('data', function(data) {
  file.write(data.toString('binary'), 'binary');
});