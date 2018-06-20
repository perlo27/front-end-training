
  document.addEventListener("click", function(event) {
    let isMessageButton = event.target.dataset.messageButton;
    if (isMessageButton == null) return;

    let messageDiv = event.target.parentElement;
    messageDiv.remove();
  });
