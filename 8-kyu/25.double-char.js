//? Link soal: https://www.codewars.com/kata/56b1f01c247c01db92000076

//? Caranya:
//? 1) Kita rubah srt ke array pake split('')
//? 2) Kita rubah map yaitu elemen + elemen
//? 3) kita join kan agar jadi satua array

function doubleChar(str) {
  return str
    .split('')
    .map((el) => el + el)
    .join('');
}

//? Cara bar barnya
function doubleCharDua(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result = result + str[i];
    result = result + str[i];
  }

  return result;
}

console.log(doubleChar('abcd'));

console.log(doubleCharDua('abcd'));
