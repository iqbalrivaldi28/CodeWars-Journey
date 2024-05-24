//? Link soal: https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

function sumMix(x) {
  let total = 0;

  for (let i = 0; i < x.length; i++) {
    total += parseInt(x[i]);
  }

  return total;
}

function sumMixDua(x) {
  return x.reduce((acc, curr) => acc + Number(curr), 0);
}

console.log(sumMix([9, 3, '7', '3']));
console.log(sumMixDua([9, 3, '7', '3']));

console.log(sumMixDua(['5', '0', 9, 3, 2, 1, '9', 6, 7]));
