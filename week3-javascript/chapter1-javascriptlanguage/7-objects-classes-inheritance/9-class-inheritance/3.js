{
  class Rabbit extends Object {
    constructor(name) {
      super();                                // super call is necessary
      this.name = name;
    }
  }

  let rabbit = new Rabbit("Rab");

  console.log( rabbit.hasOwnProperty('name') ); // true
}
