createCalendar(container, 2012, 10);

function createCalendar(elem, year, month) {
  let table = document.createElement("table");
  elem.append(table);

  let headerRow = document.createElement("tr");
  table.append(headerRow);

  for(let day of ["MO", "TU", "WE", "TH", "FR", "SA", "SU", ]) {
    let th = document.createElement("th");
    th.textContent = day;
    headerRow.append(th);
  }

  let javascriptMonth = month - 1;

  let date = new Date();
  date.setFullYear(year,javascriptMonth,1);

  let lastTr = null;
  while(date.getMonth() == javascriptMonth) {
    let dayCountedFromMonday = ( (date.getDay() + 6) % 7 );
    if(lastTr == null || dayCountedFromMonday === 0 ) {
      let tr = document.createElement("tr");
      table.append(tr);
      lastTr = tr;
      for(let i=0; i<7; i++) {
        let td = document.createElement("td");
        lastTr.append(td);
      }
    }
    let thisTd = lastTr.children[dayCountedFromMonday];
    thisTd.textContent = date.getDate();

    date.setDate(date.getDate() + 1);
  }
}
