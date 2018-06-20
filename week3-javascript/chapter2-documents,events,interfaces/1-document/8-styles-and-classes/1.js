
  function showNotification({top = 0, right = 0, className, html}) {
    let div = document.createElement("div");
    div.textContent = html;
    div.className = "notification";
    div.classList.add(className);
    div.style.top = top+"px";
    div.style.right = right+"px";
    document.body.prepend(div);
    setTimeout(function() {
      div.remove();
    }, 1500);
  }

  // test it
  let i = 1;
  setInterval(() => {
    showNotification({
      top: 100,
      right: 100,
      html: 'Hello ' + i++,
      className: "welcome"
    });
  }, 2000);
