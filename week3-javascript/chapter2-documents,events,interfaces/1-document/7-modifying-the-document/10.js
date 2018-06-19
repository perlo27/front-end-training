let tableChildren = tableToSort.firstElementChild.children;
let rows = Array.from(tableChildren).slice(1);
rows.sort(function(firstRow, secondRow) {
  return firstRow.children[0].textContent > secondRow.children[0].textContent;
});
for(let i=0; i < rows.length; i++) {
  if(tableChildren[i + 1]) {
    tableChildren[i + 1].replaceWith(rows[i]);
  } else {
    tableToSort.append(rows[i]);
  }
}
