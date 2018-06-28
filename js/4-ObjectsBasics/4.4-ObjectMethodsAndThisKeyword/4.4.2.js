// Explain the value of "this"

// eslint-disable-next-line no-unused-vars
let obj;
// eslint-disable-next-line no-unused-vars
let method;

const obj1 = {
  go() { console.log(this); },
};

console.log('>> 1 <<');
obj1.go(); // (1) [object Object] - obj1 dereferenced directly

console.log('>> 2 <<');
(obj1.go)(); // (2) [object Object] - brackets do not change anything

console.log('>> 3 <<');
// eslint-disable-next-line max-len
(method = obj1.go)(); // (3) undefined - dot dereferences 'go' method but invocation is posponed after assigment to 'method' reference.
// This is why Reference Type is lost and ivocation fail.

console.log('>> 4 <<');
// eslint-disable-next-line max-len
(obj1.go || obj1.stop)(); // (4) undefined - first calculates expression what makes loose Reference Type.
// Then invoke the metohd which fails the same reason as above.

/*
Method invocation can be performed immediatelly after the dot dereference object property.
It means that Reference Type is not lost. Any operation other than method ivokation makes RT lost
*/
