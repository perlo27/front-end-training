// how many seconds till tomorrow?

function getSecondsToTomorrow() {
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const nowDateInSeconds = hour * 3600 + minutes * 60 + seconds;
  const totalSecondsInADay = 24 + 3600; // 86400

  return totalSecondsInADay - nowDateInSeconds;
}

console.log(getSecondsToTomorrow());
