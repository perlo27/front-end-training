let user = {
    firstName: "John",
    sayHi() {
      console.log(`Hello, ${this.firstName}!`);
    }
  };
  let sayHi = user.sayHi.bind(user);
  sayHi();