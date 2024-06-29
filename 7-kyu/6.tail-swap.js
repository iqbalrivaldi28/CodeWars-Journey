//? Link soal: https://www.codewars.com/kata/5868812b15f0057e05000001

function tailSwap(arr) {
  //* Pisahkan string pertama dan kedua menjadi dua bagian berdasarkan titik dua
  const [firstPart1, secondPart1] = arr[0].split(':');
  const [firstPart2, secondPart2] = arr[1].split(':');

  //* Tukar bagian setelah titik dua di antara dua string
  const result1 = firstPart1 + ':' + secondPart2;
  const result2 = firstPart2 + ':' + secondPart1;

  return [result1, result2];
}

console.log(tailSwap(['abc:123', 'cde:456']));
