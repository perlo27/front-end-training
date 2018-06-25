// Show a weekday

const getWeekDay = exports.getWeekDay = function (date) {
  return ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'][date.getDay()];
};

const date = new Date(2012, 0, 3); // 3 Jan 2012
console.log(getWeekDay(date)); // should output "TU"

