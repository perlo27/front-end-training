let calculator = {
  first:null,
  second:null,
  read : function(){
    first = Number(prompt("Enter the first number"));
    second = Number(prompt("Enter the second number"));
  },
  sum : function(){
    return first+second;
  },
  mul : function(){
    return first*second;
  }
};

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );
