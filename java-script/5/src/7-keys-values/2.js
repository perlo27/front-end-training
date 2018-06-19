function count(object){
 /*    let counter = 0;
    for(let property of Object.keys(object)){
        counter++;
    }
    return counter; */
    //or
    return Object.keys(object).length;
}

let user = {
    name: 'John',
    age: 30
  };
  export default count;