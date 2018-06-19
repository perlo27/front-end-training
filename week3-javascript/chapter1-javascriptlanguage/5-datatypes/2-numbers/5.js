let random = function(min, max) {
  return Math.random()*(max-min)+min;
}

for(let i = 1; i < 10 ; i++) {
    console.log( random(1, 5) );
}
