function getSecondsToTomorrow() {
  let tomorrowBeginning = new Date();
  tomorrowBeginning.setDate(tomorrowBeginning.getDate() + 1);
  tomorrowBeginning.setHours(0, 0 ,0 ,0);
  return Math.floor( ( tomorrowBeginning.getTime() - Date.now() ) / 1000);
}

console.log(getSecondsToTomorrow());
