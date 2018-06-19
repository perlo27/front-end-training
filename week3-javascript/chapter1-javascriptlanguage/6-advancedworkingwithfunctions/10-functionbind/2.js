function f() {
  console.log(this.name);
}

f = f.bind( {name: "John"} ).bind( {name: "Ann" } );

f();
// we can't change it by additional binding
