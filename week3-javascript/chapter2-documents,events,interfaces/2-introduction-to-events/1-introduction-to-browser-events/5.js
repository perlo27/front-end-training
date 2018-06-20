
  let menuItems = ["donut","cupcake","candy"];
  let ulToAppend = document.createElement("ul");
  for(let item of menuItems) {
    let li = document.createElement("li");
    li.textContent = item;
    ulToAppend.append(li);
  }
  collapsingMenu.addEventListener("click", function() {
    if(!collapsingMenu.children.length) {
      collapsingMenu.append(ulToAppend);
      collapsingMenu.childNodes[0].textContent = "> " + collapsingMenu.childNodes[0].textContent;
    } else {
      ulToAppend.remove();
      collapsingMenu.childNodes[0].textContent = collapsingMenu.childNodes[0].textContent.substring(2);
    }
  });
