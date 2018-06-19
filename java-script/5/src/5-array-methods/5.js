function copySorted(arr) {
    let sorted = [...arr];
    //return arr.slice().sort();
    return sorted.sort((a,b) => a.localeCompare(b))
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes)