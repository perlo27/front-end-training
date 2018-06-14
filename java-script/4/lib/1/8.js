"use strict";

var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(menu) {
    for (var key in menu) {
        if (typeof menu[key] == 'number') {
            menu[key] *= 2;
        }
    }
}
console.log(menu);
multiplyNumeric(menu);
console.log(menu);