{
  let dictionary = Object.create(null);

Object.defineProperty(dictionary, "toString", {
  value: function(){
    return Object.keys(this).join(",");
  },
  "writable": false,
  "enumerable": false,
  "configurable": false
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

// apple and __proto__ is in the loop
for(let key in dictionary) {
  console.log(key); // "apple", then "__proto__"
}

// comma-separated list of properties by toString
console.log(dictionary); // "apple,__proto__"
}
