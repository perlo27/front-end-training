class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = 'FormatError';
    }
}

let err = new FormatError("formatting error");

console.log(err.message);
console.log(err.stack);
console.log(err.name);