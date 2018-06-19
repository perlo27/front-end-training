{
  function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype.sayHi = function() {
    console.log(this.name);
  };

  let rabbit = new Rabbit("Rabbit");

  rabbit.sayHi(); // writes Rabbit
  Rabbit.prototype.sayHi();               // since "this" is prototype, undefined
  Object.getPrototypeOf(rabbit).sayHi();  // same
  rabbit.__proto__.sayHi();               // same

}
