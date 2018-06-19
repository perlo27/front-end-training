function createDate() {
  let date = new Date(2012, 1, 20, 3, 12);
  console.log(date);
}

export const getWeekDay = date => {
  let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return days[date.getDay()];
};

export const getLocalDay = date => {
  return date.getDay() == 0 ? 7 : date.getDay();
};

export const getDateAgo = (date, days) => {
  let dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
};

export const getLastDayOfMonth = (year, month) => {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
};

function getSecondsToday() {
  let startOfDay = new Date();
  startOfDay.setSeconds(0);
  startOfDay.setMinutes(0);
  startOfDay.setHours(0);
  let date = Date.now();
  let seconds = Math.round((date - startOfDay) / 1000);
  console.log(seconds);
}

function getSecondsToTomorrow() {
  let endOfDay = new Date();
  endOfDay.setSeconds(59);
  endOfDay.setMinutes(59);
  endOfDay.setHours(23);
  let date = Date.now();
  let seconds = Math.round((endOfDay - date) / 1000);
  console.log(seconds);
}

function toJSONAndBack() {
  let user = {
    name: "John Smith",
    age: 35
  };
  let user2 = JSON.parse(JSON.stringify(user));
}
