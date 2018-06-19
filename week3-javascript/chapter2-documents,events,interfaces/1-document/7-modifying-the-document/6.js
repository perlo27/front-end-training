function findDescendants(element) {
  if(element.children.length) {
    let ul = element.children[0];
    let totalDescendants = 0;
    for(let child of ul.children) {
      let descendantsOfChild = findDescendants(child);
      totalDescendants = totalDescendants + descendantsOfChild;
    }
    if(element.tagName !== "DIV") {
      element.firstChild.textContent = element.firstChild.textContent + " [" + totalDescendants+"]";
    }
    return totalDescendants + 1;
  } else {
    return 1;
  }
}

findDescendants(container);
