let random = function(min, max) {
  return Math.random()*(max-min)+min;
}

let randomInt = function(min, max) {
  return Math.floor(random(min, max+1));
}

for(let i = 1; i < 10 ; i++) {
    console.log( randomInt(1, 5) );
}
