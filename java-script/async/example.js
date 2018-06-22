'use strict';
function first(value,callback) {
    setTimeout(function () {
        console.log(value)
    }, 5000);
}

function second(value2) {
    console.log(value2);
}

first("PIERWSZY");
second("DRUGi");

// function doHomework(subject, callback) {
//     console.log(`Starting my ${subject} homework.`);
//     callback();
//   }
  
//   function alertFinished(){
//     console.log('Finished my homework');
//   }
  
//   doHomework('math', alertFinished);
