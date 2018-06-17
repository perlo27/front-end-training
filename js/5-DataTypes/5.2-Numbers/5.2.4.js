// An occasional infinite loop
let i = 0;
while (i !== 10) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) {
    console.log(i);
    break;
  }
}

// Operation on float numbers provides precission loose
