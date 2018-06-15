function work(a, b) {
  console.log( a + b ); // work is an arbitrary function or method
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

function spy(func) {
  let calls = []; // this is not used in the solution, instead caller.calls is used
  function callerFunc() {
    calls.push(Array.from(arguments));
    func.apply(this,arguments);
  }

  callerFunc.calls = calls;

  return callerFunc;
}
