
  let allMessages = document.querySelectorAll(".message");
  for(thisMessage of allMessages) {
    let closeButton = document.createElement("input");
    closeButton.type = "button";
    closeButton.value = "[x]";
    closeButton.style.color = "red";
    thisMessage.append(closeButton);
    let remove = {
      element: thisMessage,
      handleEvent(event) {
        this.element.remove();
      },
    }
    closeButton.addEventListener("click", remove);
  }
