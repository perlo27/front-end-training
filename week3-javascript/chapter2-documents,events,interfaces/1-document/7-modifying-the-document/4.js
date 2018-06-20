
  while(true) {
    let nextItem = prompt("Next list element ? ", "");
    if(nextItem) {
      let element = document.createElement('li');
      element.textContent = nextItem;
      userList.appendChild(element);
    } else {
      break;
    }
  }
