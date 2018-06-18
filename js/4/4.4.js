//4.4.1
let user = {
    name: "John",
    go: function () { console.log(this.name) }
};

(user.go)()

//4.4.2
let obj;

obj = {
    go: function () { console.log(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

// (method = obj.go)();    // (3) undefined - obj.go lost his reference to 'this' by assign to method variable

// (obj.go || obj.stop)(); // (4) undefined - turns to value which is returned from obj.go and then we lost information about 'this'

//4.4.3
function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let myUser = makeUser();

console.log(myUser.ref.name); // What's the result? undefined

//4.4.4
let calc = {
    read() {
        this.a = Math.floor(Math.random() * 100);
        this.b = Math.floor(Math.random() * 100);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calc.read();
console.log(calc.sum());
console.log(calc.mul());

//4.4.5
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // shows the current step
        console.log(this.step);
        return this;
    }
};

ladder.up().up().down().showStep();