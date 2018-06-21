function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

delay(3000).then(() => console.log("run after 3 seconds"));

function showCircle(cx, cy, radius, callback) {
  let div = document.createElement("div");
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + "px";
  div.style.top = cy + "px";
  div.className = "circle";
  document.body.append(div);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      div.style.width = radius * 2 + "px";
      div.style.height = radius * 2 + "px";
      div.addEventListener("transitionend", function handler() {
        div.removeEventListener("transitionend", handler);
        resolve(div);
      });
    }, 0);
  });
}
