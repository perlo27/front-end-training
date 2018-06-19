function getLastDayOfMonth(year, month) {
  let lastDayOfMonth = new Date(year, month, 27);
  while(true) {
    lastDayOfMonth.setDate(lastDayOfMonth.getDate() + 1);
    if(lastDayOfMonth.getMonth() != month) {
      lastDayOfMonth.setDate(lastDayOfMonth.getDate() - 1);
      break;
    }
  }
  return lastDayOfMonth;
}

console.log(getLastDayOfMonth(2012, 1));
