function sayHi() {
  console.log( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John"
});

console.log( bound.test ); // what will be the output? why?

// output is undefined since a new context is created when sayHi.bind is called 
