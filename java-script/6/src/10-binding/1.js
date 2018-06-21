//What will be the output?

function f() {
    console.log( this ); // ?
  }
  
  let user = {
    g: f.bind(null)
  };
  
  user.g();