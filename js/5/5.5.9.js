let arr = [1,2,3];

let shuffle = function(arr) {
    return arr.sort(() => Math.random() - 0.5);
};

console.log(shuffle(arr))
console.log(shuffle(arr))
console.log(shuffle(arr))