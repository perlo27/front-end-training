//5.5.7
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map(ele => {
    return {
        id : ele.id,
        fullName : ele.name + ' ' + ele.surname
    };
});

console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);