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

function printListIterative(list) {
  let current = list;
  let printed = "";
  while(true) {
    printed = printed.concat(current.value.toString(), ", ");
    if(current.next == null) {
      break;
    }
    current = current.next;
  }
  return printed;
}

function printListRecursive(list) {
  if (list == null) {
    return "";
  }

  return list.value.toString().concat(", ", printListRecursive(list.next));
}

console.log(printListIterative(list));
console.log(printListRecursive(list));

// Recursive version is simpler
