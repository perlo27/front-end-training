// this works
{
  function ObjectCreator() {
    this.someProp = true;
  }
  let obj = new ObjectCreator()
  let obj2 = new obj.constructor();
  console.log(obj2.someProp);
}

// doesn't work
{
  function ObjectCreator() {
    this.someProp = true;
  }
  ObjectCreator.prototype = {}; // (*);
  let obj = new ObjectCreator();
  let obj2 = new obj.constructor();
  console.log(obj.someProp);
  console.log(obj2.someProp);

}
