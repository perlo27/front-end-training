let arr = [1, 2, 3];

function shuffle(arr) {
  arr.sort( (a,b) => {
    if( Math.random() > 0.5 ){
      return 1;
    } else {
      return -1;
    }
  });
}

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);
