'use strict';

function camelize(input) {
    let arr = input.split("-");
    for (let i = 1; i < arr.length; i++) {
        let tmp = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        arr[i] = tmp;
    }
    return arr.join("");


    console.log(input.indexOf)
    return input;
};


export default camelize; 