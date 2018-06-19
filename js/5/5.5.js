//5.5.1
let camelize = function (str) {
    let arr = str.split("-");
    console.log(arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join(''));
};

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

//5.5.2
let filterRange = function (arr, a, b) {
    return arr.filter((ele) => ele <= b && ele >= a);
    
};
let arr = [5, 3, 8, 1];
console.log(filterRange(arr, 1,4));
console.log(arr);

//5.5.3
let filterRangeInPlace = function(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
};

filterRangeInPlace(arr, 1, 4);
console.log(arr);

//5.5.4
let arrUnsorted = [5, 2, 1, -10, 8];

arrUnsorted.sort((a, b) => b - a);

console.log(arrUnsorted);

//5.5.5
let arrStrUnsorted = ["HTML", "JavaScript", "CSS"];

let copySorted = function(arr) {
    return arr.slice().sort();
};
let sorted = copySorted(arrStrUnsorted);

console.log(sorted);
console.log(arrStrUnsorted);

//5.5.6
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((ele) => ele.name);
console.log(names);

