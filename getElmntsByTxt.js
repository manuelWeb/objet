function getEltByTxt(matchStr, tag) {
  var tagAry = [];
  var tagsel = document.getElementsByTagName(tag);
  var i;
  // console.log(tagsel)
  for (i = 0; i < tagsel.length; i++) {
    if (tagsel[i].innerHTML.indexOf(matchStr) >= 0) {
      // return tagsel[i];
      // return tagsel[i].parentElement;
      // tagAry.push(tagsel[i].children);
      tagAry.push(tagsel[i]);
    }
  }
  // return null;
  return tagAry;
}
// getEltByTxt('date+','td')

function afficheTR_date() {
  var line = getEltByTxt('date+','tr');
  for (var i = line.length - 1; i >= 0; i--) {
    console.info(line[i].innerHTML);
  }
}
// .match(/[0-9]{2}\/[0-9]{2}\/17/ig)