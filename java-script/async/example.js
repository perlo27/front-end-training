function first(value,callback) {
    // Simulate a code delay
    setTimeout(function () {
        console.log(value)
    }, 500);
    // return callback(value);
}

function second(value2) {
    console.log(value2);
}

first("PIERWSZY");
second("DRUGi");
