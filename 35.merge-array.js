//? Link soal: https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript

function mergeArrays(arr1, arr2) {
  //? Gabungin arraynya
  let mergedArray = [...arr1, ...arr2];

  //? Kita urutin haril penggabungan arraynya
  mergedArray.sort((a, b) => a - b);

  //? Kita hapus elemen yang duplikat
  let uniqueArray = Array.from(new Set(mergedArray));

  return uniqueArray;
}

//* Cara pendeknya
function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
}


console.log(mergeArrays([1,2,3,4], [5,6,7,8]));
