
function showCircle(cx, cy, radius) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  document.body.append(div);

  let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';
    }, 0);

    setTimeout(() => resolve(div), 2000);

    // solution from the page 
    // div.addEventListener('transitionend', function handler() {
    //    div.removeEventListener('transitionend', handler);
    //    resolve(div);
    //  });
  });

  promise.then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
  });
}
