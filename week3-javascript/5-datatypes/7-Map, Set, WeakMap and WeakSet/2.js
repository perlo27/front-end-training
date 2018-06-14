function aclean(arr) {
  let set = new Set();
  let array = [];
  arr.forEach(el => {
    let lowercase = el.toLowerCase();
    let sorted = Array.from(lowercase);
    sorted.sort();
    let asStr = sorted.join("");
    if(!set.has(asStr)) {
      set.add(asStr);
      array.push(el);
    }
  });
  return array;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
