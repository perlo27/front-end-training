{
  new Promise(function(resolve, reject) {
    setTimeout(() => {
      throw new Error("Whoops!");
    }, 1000);
  }).catch(console.log);

}

// was not caught, since the error happened inside the timeout function
// if reject was called, it would be caught
