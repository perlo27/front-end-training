{
  function f() {
    console.log("Hello!");
  }
  Function.prototype.defer = function(delay){
    setTimeout(this,delay);
  };

  f.defer(1000); // shows "Hello!" after 1 second
}
