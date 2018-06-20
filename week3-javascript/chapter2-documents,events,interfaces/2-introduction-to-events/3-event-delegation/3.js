function sortTable(event) {
  const th = event.target.closest('th');

  if(!th) return;

  let indexOfTh = Array.from(th.parentElement.children).indexOf(th);
  let typeOfTh = th.dataset.type;

  let tableBody = grid.querySelector("tbody");
  let rows = tableBody.children;

  if(rows.length) {
    let rowsArray = Array.from(rows);
    rowsArray.sort(function(row1, row2) {
      let cell1 = row1.children[indexOfTh].innerHTML;
      let cell2 = row2.children[indexOfTh].innerHTML;

      if(typeOfTh === "number") {
        cell1 = Number(cell1);
        cell2 = Number(cell2);
      }
      return cell1 > cell2;
    });
    for(let i=0; i < rowsArray.length; i++) {
      if(tableBody.children[i]) {
        tableBody.replaceChild(rowsArray[i], tableBody.children[i]);
      } else {
        tableBody.append(rowsArray[i]);
      }
    }
  }
}

document.addEventListener("click", sortTable);
