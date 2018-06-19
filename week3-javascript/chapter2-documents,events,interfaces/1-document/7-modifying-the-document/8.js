let spanHour = appendSpan({
  container: container,
  text:new Date().getHours(),
  backgroundColor:"red",
});

appendSpan({
  container: container,
  text:" : ",
});

let spanMinute = appendSpan({
  container: container,
  text:new Date().getMinutes(),
  backgroundColor:"blue",
});

appendSpan({
  container: container,
  text:" : ",
});

let spanSeconds = appendSpan({
  container: container,
  text:new Date().getSeconds(),
  backgroundColor:"green",
});

setInterval(function() {
  let now = new Date();
  spanHour.textContent = now.getHours();
  spanMinute.textContent = now.getMinutes();
  spanSeconds.textContent = now.getSeconds();
}, 1000);

function appendSpan({container,text, backgroundColor}) {
  let span = document.createElement("span");
  if(text) {
    span.textContent = text;
  }
  if(backgroundColor) {
    span.style.color = backgroundColor;
  }
  container.append(span);
  return span;
}
