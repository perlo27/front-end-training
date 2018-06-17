// 1. Syntax check
const user = {
  name: 'John',
  go() { console.log(this.name); },
};

(user.go)(); // Result: works fine
