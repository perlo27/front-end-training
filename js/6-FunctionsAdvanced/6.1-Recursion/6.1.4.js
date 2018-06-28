// Output a single-linked list

function printListVer1(list) {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

function printListVer2(list) {
  console.log(list.value); // output the current item

  if (list.next) {
    printListVer2(list.next); // do the same for the rest of the list
  }
}

const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

printListVer1(list);
printListVer2(list);
