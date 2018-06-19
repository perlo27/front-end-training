let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printListReverseIterative(list) {
  let current = list;
  let printed = "";
  while(true) {
    printed = current.value.toString().concat(", ", printed);
    if(current.next == null) {
      break;
    }
    current = current.next;
  }
  return printed;
}

function printListReverseRecursive(list) {
  if (list == null) {
    return "";
  }

  return printListReverseRecursive(list.next).concat(list.value.toString(), ", ");
}

console.log(printListReverseIterative(list));
console.log(printListReverseRecursive(list));

// Recursive version is simpler
