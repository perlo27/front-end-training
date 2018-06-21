const head = {
  glasses: 1
};

const table = {
  __proto__: head,
  pen: 3
};

const bed = {
  __proto__: table,
  sheet: 1,
  pillow: 2
};

const pockets = {
  __proto__: bed,
  money: 2000
};
