"use strict";

//What is the result of this code?
var user = {
    name: "John",
    go: function go() {
        console.log(this.name);
    }
};

user.go();