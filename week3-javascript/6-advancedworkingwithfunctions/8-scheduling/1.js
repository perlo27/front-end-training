function printNumbersSetTimeout(from, to) {
  setTimeout(function run(){
    if(from <= to) {
      console.log(from);
      from = from + 1;
      setTimeout(run, 1000);
    }
  }, 0);
}

function printNumbersSetInterval(from, to) {
  setInterval(function run(){
    if(from <= to) {
      console.log(from);
      from = from + 1;
    }
  }, 1000);
}

// printNumbersSetInterval(1,10);
// printNumbersSetTimeout(1,10);
