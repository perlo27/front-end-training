// How many seconds has passed today?

function getSecondsToday() {
  const date = new Date();
  // eslint-disable-next-line no-mixed-operators
  return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

console.log(getSecondsToday());

