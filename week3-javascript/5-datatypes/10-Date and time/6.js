function getSecondsToday() {
  let todayBeginning = new Date();
  todayBeginning.setHours(0, 0 ,0 ,0);
  return Math.floor( (Date.now() - todayBeginning.getTime() ) / 1000);
}

console.log(getSecondsToday());
