//4.1.1
let user = {
    name : "John",
    surname: "Smith",
};
user.name = "Pete";
delete user.name;
console.log(user);

//4.1.2
function isEmpty(schedule) {
    for(let key in schedule) {
        return false;
    }
     return true;
}

if (typeof module !== 'undefined' && module.exports != null) {
    exports.isEmpty = isEmpty;
}

//4.1.3
// const user = {
//     name: "John"
//   };
  
// // does it work?
// user.name = "Pete"; //yes

//4.1.4
exports.sum = function sum(salaries) {
        let sum = 0;
        for(let key in salaries) {
            sum += salaries[key]; 
        }        
        return sum;
}

//4.1.5
exports.multiplyNumeric = function multiplyNumeric(obj) {
    for(let key in obj) {
        if(Number.isInteger(obj[key])) {
            obj[key] = obj[key] * 2;
        }
    }
    return obj;
}