// Iterable keys

const map = new Map();
map.set('name', 'John');

// ap.keys(): IterableIterator<K>
const keys = Array.from(map.keys());

keys.push('more');
console.log(keys); // name, more
