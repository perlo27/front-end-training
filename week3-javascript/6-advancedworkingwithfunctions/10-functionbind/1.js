function f() {
  console.log( this ); // prints null
}

let user = {
  g: f.bind(null)
};

user.g();
