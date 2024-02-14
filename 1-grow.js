//* Soal 1 diminta untuk mengklikan semua nilai yg ada dalam sebuah array
//* [1, 2, 3, 4] maka hasilnya harus 24

//? Link soal: https://www.codewars.com/kata/57f780909f7e8e3183000078

function grow(x) {
  let result = x[0];

  for (let i = 1; i < x.length; i++) {
    result = result * x[i];
  }

  return result;
}

console.log(grow([1, 2, 3, 4]));

//? Bisa juga gini pake arrow function biar lebih singkt
//? NIlai hasil = accumolator

function growTwo(x) {
  const result = x.reduce((accomulator, currentValue) => {
    return accomulator * currentValue;
  }, 1);

  return result;
}

console.log(growTwo([2, 2, 2])); //? Hasilnya 8
