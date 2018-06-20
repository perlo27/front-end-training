
{
  let ul = document.body.children[1];

  let test2 = ul.lastChild;
  console.log(test2);
  let test1NextSibling = test2.nextSibling;
  console.log(test1NextSibling);
  // prints null, since lastChild returns the last element or text

  let john = ul.children[0];
  console.log(john);
  let test1 = john.previousSibling;
  console.log(test1);
  // prints test1, since children[0] returns the first non text element
}
