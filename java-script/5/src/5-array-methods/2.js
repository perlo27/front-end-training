'use strict';

function filterRange(arr, bottom, top) {
    /* let filtered = [];
    for(let value of arr){
        if(value >= bottom && value <= top){
            filtered.push(value);
        }
    }
    return filtered; */
    let filtered = arr.filter(value => (value>=bottom && value<=top));
    return filtered;
};

export default filterRange;
