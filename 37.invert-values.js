//? Link soal: https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

const arg = require("arg");

//? Mengembalikan nilai dari positif ke negatif atau sebaliknya

function invert(array) {
    return array.map(num => -num);
 }


 console.log(invert([1, 2, 3, 4]));
 console.log(invert([7, 8, 9, -4]));