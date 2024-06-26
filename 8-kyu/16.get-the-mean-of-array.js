//? Link soal: https://www.codewars.com/kata/563e320cee5dddcf77000158

function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array
  let total = 0;

  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }

  return Math.floor(total / marks.length);
}

//? Cara kedua
function getAverageDua(marks) {
  return Math.floor(marks.reduce((acc, curr) => acc + curr) / marks.length);
}

console.log(getAverage([1, 2, 3, 4, 5]));
console.log(getAverageDua([1, 2, 3, 4, 5]));
