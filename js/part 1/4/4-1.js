let user = {};
user["name"] = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

export function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

export function sumProperties(obj) {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
}

export function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) === 'number') {
            obj[key] *= 2;
        }
    }
}
