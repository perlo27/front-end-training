// European weekday

const getLocalDay = exports.getLocalDay = function (date) {
  return date.getDay() === 0 ? 7 : date.getDay();
}

const date = new Date(2012, 0, 3); // 3 Jan 2012, Tuesday
console.log(getLocalDay(date)); // European 2nd day of week

