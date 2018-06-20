
  let table = document.body.firstElementChild;
  for(let i=0; i < table.children[0].children.length; i++) {
    let cell = table.children[0].children[i].children[i];
    cell.style.backgroundColor  = "red";
  }
