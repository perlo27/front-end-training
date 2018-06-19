let obj, method;

obj = {
  go: function() { console.log(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined

// because javascript uses reference type, first two work as expected
// the last two call assignment and binary operator, so reference type isn't passed
