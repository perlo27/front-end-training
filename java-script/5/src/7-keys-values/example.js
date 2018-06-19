let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut",'Candy'],
    extra: true    // something extra that we will not destruct
};

// destructuring assignment on multiple lines for clarity
let {
    size: { // put size here
        width,
        height
    },
    title = "Menu" // not present in the object (default value is used)
} = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200