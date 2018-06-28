// Last day of month?

function getLastDayOfMonth(year, month) {
  const date = new Date(year, month + 1, 0);
  return date.getDate();
}

exports.getLastDayOfMonth = getLastDayOfMonth;

console.log(getLastDayOfMonth(2012, 0)); // 31
console.log(getLastDayOfMonth(2012, 1)); // 29
console.log(getLastDayOfMonth(2013, 1)); // 28
