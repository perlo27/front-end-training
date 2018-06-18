//5.4.1
let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
console.log(fruits.length); // 4

//5.4.2
let arr = ["Jazz", "Blues"];
arr.push("Rock-n-Roll");

arr[Math.floor((arr.length - 1) / 2)] = "Classics";

console.log(arr.shift());

arr.unshift("Rap", "Reggae");

console.log(arr);


//5.4.3
let arr2 = ["a", "b"];

arr2.push(function () {
    console.log(this);
})

arr2[2](); // "a","b",function because arr is a object

//5.4.4
let sumInt = function (arr) {
    let sum = 0;
    for (let val of arr) {
        sum += +val;
    }
    return sum;
};
console.log(sumInt([1, 2, 3, 4, 5]));

//5.4.5
let getMaxSubSum = function (arr) {
    let maxSum = 0; // if we take no elements, zero will be returned

    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }
    return maxSum;

};

console.log(getMaxSubSum([1, -2, 3, 4, -9, 6]));