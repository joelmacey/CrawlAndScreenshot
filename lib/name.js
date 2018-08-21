exports.nameMaker = function(screenURL) {
  if (screenURL.split('/').slice(3) != '') {
    var name = screenURL.split('/').slice(3).toString();
    while (name.includes(',')){
      name = name.replace(',','-');
      name =name.slice(0, -1)
    }
    name = name + '.png';
  } else {
    name='homepage.png';
  }
  return name;
}
