console.log( formatDate(new Date(new Date - 1)) ); // "right now"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// yesterday's date like 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );

function formatDate(date) {
  let now = new Date();

  let oneSecondAgo = new Date(now.getTime());
  oneSecondAgo.setSeconds(oneSecondAgo.getSeconds() - 1);
  if (date.getTime() >= oneSecondAgo) {
    return "right now";
  }

  let oneMinuteAgo = new Date(now.getTime());
  oneMinuteAgo.setMinutes(oneMinuteAgo.getMinutes() - 1);
  if (date.getTime() >= oneMinuteAgo) {
    return Math.floor( (now.getTime() - date.getTime() ) / 1000) + " sec. ago";
  }

  let oneHourAgo = new Date(now.getTime());
  oneHourAgo.setHours(oneHourAgo.getHours() - 1);
  if (date.getTime() >= oneHourAgo) {
    return Math.floor( ( now.getTime() - date.getTime() ) / (1000 * 60) ) + " min. ago";
  }

  let timeArray = [
    date.getDate(),
    "." ,
    ("0" + (date.getMonth()+1)).slice(-2),
    ".",
    date.getYear()%100,
    " ",
    ("0" + (date.getHours())).slice(-2),
    ":",
    ("0" + (date.getMinutes())).slice(-2),
  ];

  return timeArray.join("");
}
