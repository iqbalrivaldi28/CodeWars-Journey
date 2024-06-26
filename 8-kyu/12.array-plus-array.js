//? Link soal: https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

function arrayPlusArray(arr1, arr2) {
  let total = 0;

  for (let i = 0; i < arr1.length; i++) {
    total = total + arr1[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    total = total + arr2[i];
  }

  return total;
}

//? Cara kedua
function arrayPlusArrayKedua(arr1, arr2) {
  return [...arr1, ...arr2].reduce((acc, current) => {
    return acc + current;
  });
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArrayKedua([1, 2, 3], [4, 5, 6]));
