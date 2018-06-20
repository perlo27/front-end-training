let listener = {
  handleEvent(event) {
    let targetElement = event.target;
    if(!targetElement.closest) return;

    if(targetElement.closest('#contents') && targetElement.closest("a")) {
      let follow = prompt("Do you really want to follow? Y / N");
      if(!follow || follow !== "Y") {
        event.preventDefault();
      }
    }
  }
}
document.addEventListener("click", listener);
