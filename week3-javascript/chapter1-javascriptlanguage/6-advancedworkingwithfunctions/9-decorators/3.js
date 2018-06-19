let f = debounce(log, 1000);

f(1); // runs immediately
f(2); // ignored

setTimeout( () => f(3), 100); // ignored ( only 100 ms passed )
setTimeout( () => f(4), 1100); // runs
setTimeout( () => f(5), 1500); // ignored (less than 1000 ms from the last run)

function log(x) {
  console.log("Here it is " + x);
}

function debounce(func, minDelay) {
  let lastRun = 0;

  return function(...args) {
    if(Date.now() - lastRun > minDelay) {
      lastRun = Date.now();
      func.apply(this,args);
    }
  }
}
