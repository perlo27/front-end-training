let i = 0;

let start = Date.now();

function count() {

  if (i == 1000000000) {
    console.log("Done in " + (Date.now() - start) + 'ms');
  } else {
    setTimeout(count, 0);
  }

  // a piece of heavy job
  for(let j = 0; j < 1000000; j++) {
    i++;
  }

}

// count();

let intervalId;

function countWithInterval() {
  if(i >= 1000000000) {
    clearInterval(intervalId);
    console.log("Done in " + (Date.now() - start) + 'ms');
  } else {
    for(let j = 0; j < 1000000; j++) {
      i++;
    }
  }
}

intervalId = setInterval(countWithInterval, 1000);
