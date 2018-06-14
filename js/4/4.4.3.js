// 3. Using "this" in object literal
function makeUser() {
  return {
    name: 'John',
    ref: this,
  };
}

const user1 = makeUser();
console.log(user1.ref.name); // What's the result? : 'undefined'
// 'this' must refer to object. In function 'this' refers to 'undefined'.
// It is not changed by Object Literals {} itself but it is changed by methods..
