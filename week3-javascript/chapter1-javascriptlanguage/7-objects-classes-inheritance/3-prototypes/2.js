let head = {
  glasses: 1
};

let table = {
  __proto__: head,
  pen: 3
};

let bed = {
  __proto__: table,
  sheet: 1,
  pillow: 2
};

let pockets = {
  __proto__: bed,
  money: 2000
};

console.log(pockets.glasses);

let start = Date.now();
for(let i=0; i<1000000; i++) {
  let glasses  = pockets.glasses;
}
let end = Date.now();
console.log("Time diff for pockets is " + (end-start));

start = Date.now();
for(let i=0; i<1000000; i++) {
  let glasses  = head.glasses;
}
end = Date.now();
console.log("Time diff for head is " + (end-start));


// Time diff for pockets is 5
// Time diff for head is 4
