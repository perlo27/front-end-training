function max(a,b) {
  return a > b ? a : b;
}

function sort(array) {
  let isSorted = false;
  while(!isSorted) {
    isSorted = true;
    for(let i=0; i < array.length-1; i++){
      if(array[i] > array[i+1]){
        let tmp = array[i];
        array[i] = array[i+1];
        array[i+1] = tmp;
        isSorted = false;
        break;
      }
    }
  }
}
