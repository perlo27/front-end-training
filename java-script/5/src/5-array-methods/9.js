let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

let newArr =[];
for(let i = 0; i < strings.length; i++){
    if(!newArr.includes(strings[i])){
        newArr.push(strings[i]);
    }
}

// let set1 =1   new Set(strings);
console.log(newArr);1   