let date = new Date(2012, 0, 3);  // 3 Jan 2012
console.log( getLocalDay(date) );       // tuesday, should show 2

function getLocalDay(date) {
  let localDay = date.getDay();
  if(localDay == 0) {
    localDay = 7;
  }
  return localDay;
}
