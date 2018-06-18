function filterRangeInPlace(array, bottom, top) {
    // let filtered = arr.filter(value => (value>=bottom && value<=top));
    // return filtered;
    for (let i = 0; i < array.length ; i++) {
        if (array[i] < bottom || array[i] > top) {
            array.splice(i,1);
        }
    }
    
}

export default filterRangeInPlace;