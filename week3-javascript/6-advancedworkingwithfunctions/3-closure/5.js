function inBetween(a , b) {
  return function(el) {
    if( (a <= el && el <= b) || (b <= el && el <= a) ) {
      return true;
    }
    return false;
  }
}

function inArray(arr) {
  return function(el) {
    if(arr.indexOf(el)) {
      return true;
    } else {
      return false;
    }
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2
