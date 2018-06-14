let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function sum(object){
    let sum = 0;
    for(let property in salaries){
        sum = sum + salaries[property];
    }
    return sum;
}

console.log(sum(salaries));