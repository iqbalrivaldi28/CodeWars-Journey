//? Link soal: https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

//? Mencari nilai terkecil dari sebuah array

function findSmallestInt(arr) {
  return Math.min(...arr);
}

console.log(findSmallestInt([1, 2, 3, 4, 5, 0]));
