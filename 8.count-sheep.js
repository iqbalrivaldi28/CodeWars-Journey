//? Link soal: https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

var countSheep = function (num) {
  let result = '';

  for (let i = 1; i <= num; i++) {
    result += i + ' sheep...';
    //? result = result + (i + ' sheep...'); Penulisan Panjangnya
  }

  return result;
};

console.log(countSheep(3));
