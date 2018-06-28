// Output a single-linked list in the reverse order

function printReverseListVer1(list) {
  if (list.next) {
    printReverseListVer1(list.next);
  }

  console.log(list.value);
}

function printReverseListVer2(list) {
  const arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
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

printReverseListVer1(list);
printReverseListVer2(list);
