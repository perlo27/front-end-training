// Array operations

const styles = ['Jazz', 'Blues'];
console.log(styles); //

styles.push('Rock-n-roll');
console.log(styles); //

const midIdx = styles.length % 2 === 0 ?
  Math.floor((styles.length + 1) / 2) :
  Math.floor(styles.length / 2);
styles[midIdx] = 'Classic';
console.log(styles); //

console.log(styles.shift());
console.log(styles); //

styles.unshift('Rap', 'Reggie');
console.log(styles); //
