function filterRangeInPlace(arr, a, b) {
  let currentIndex = 0;
  while(currentIndex < arr.length) {
    let element = arr[currentIndex];
    if( (element < a && element < b) || (element > a && element > b) ) {
      arr.splice(currentIndex, 1);
    } else {
      currentIndex = currentIndex + 1;
    }
  }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log( arr ); // [3, 1]
