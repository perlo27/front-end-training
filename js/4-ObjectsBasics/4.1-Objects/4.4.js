// Multiply numeric properties by 2

function multiplyNumeric(obj) {
  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    if ((typeof obj[key]) === 'number') {
      // eslint-disable-next-line no-param-reassign
      obj[key] *= 2;
    }
  }
}

function printProperties(obj) {
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const key in obj) {
    console.log(`${key}:${obj[key]}`);
  }
}

// before the call
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

printProperties(menu);
multiplyNumeric(menu);
printProperties(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: 'My menu',
};
