{
  class Animal {

    constructor(name) {
      this.name = name;
    }

  }

  class Rabbit extends Animal {
    constructor(name) {
      super(name);
      // this.name = name;
      this.created = Date.now();
    }
  }

  let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
  console.log(rabbit.name);

  // first call should be super in extending class
}
