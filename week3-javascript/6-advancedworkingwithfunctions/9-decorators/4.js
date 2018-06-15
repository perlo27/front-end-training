let f = throttle(log, 1000);

f(1); // runs immediately
f(2); // ignored

setTimeout( () => f(3), 100); // ignored ( only 100 ms passed )
setTimeout( () => f(4), 1100); // runs
setTimeout( () => f(5), 1500); // ignored (less than 1000 ms from the last run)

function log(x) {
  console.log("Here it is " + x);
}

function throttle(func, minDelay) {
  let lastRunId = null;
  let lastArgs;
  let lastThis;

  return function(...args) {
    lastThis = this;
    lastArgs = args;
    if(lastRunId == null) {
      func.apply(lastThis,lastArgs);
      lastRunId = setInterval(function() {
        if(lastArgs) {
          func.apply(lastThis,lastArgs);
        } else {
          clearInterval(lastRunId);
          lastRunId = null;
        }
        lastArgs = null;
      }, minDelay);
    }
  }
}
