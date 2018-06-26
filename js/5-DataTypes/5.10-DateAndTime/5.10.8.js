// Format the relative date

function formatDate(date) {
  const nowDate = new Date();
  const diff = nowDate - date;

  if (diff < 1000) {
    return 'right now';
  } else if (diff < 60 * 1000) {
    return `${date.getSeconds()} sec. ago`;
  } else if (diff < 3600 * 1000) {
    return `${date.getMinutes()} min. ago`;
  }
  return `${date.getDate()}.${date.getMonth()}.${date.getYear()} ${date.getHours()}:${date.getMinutes()}`;
}

console.log(formatDate(new Date(new Date() - 1))); // "right now"
console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 sec. ago"
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 min. ago"
// yesterday's date like 31.12.2016, 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
