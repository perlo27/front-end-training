// Sum numbers from the visitor
const numGen = () => {
  const sign = Math.random() > 0.5 ? 1 : -1;
  return sign * Math.floor(Math.random() * 100);
};
const num1 = +numGen();
const num2 = Number(numGen());

console.log(`Num1 = ${num1}; Num2 = ${num2}; Sum = ${num1 + num2}`);
