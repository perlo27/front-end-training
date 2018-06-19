'use strict'

console.log('2.15 task 1');
let ask = (question, yes, no) => confirm(question) ? yes() : no();
//ask('Do you agree', () => console.log('You agreed'), ()=> console.log('You cancelled the execution'));
