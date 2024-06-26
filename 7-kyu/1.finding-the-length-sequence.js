//? Link soal: https://www.codewars.com/kata/5566b0dd450172dfc4000005/train/javascript

var lengthOfSequence = function (arr, n) {
   // Hitung jumlah kemunculan angka n dalam array
  const count = arr.filter(x => x === n).length;
  
  // Jika angka n muncul kurang dari dua kali atau lebih dari dua kali, kembalikan 0
  if (count !== 2) {
    return 0;
  }

  // Temukan indeks pertama dan terakhir dari angka n dalam array
  const firstIndex = arr.indexOf(n);
  const lastIndex = arr.lastIndexOf(n);

  // Hitung panjang sub-array dari indeks pertama hingga indeks terakhir
  const length = lastIndex - firstIndex + 1;
  
  return length;
  };

  console.log(lengthOfSequence([0, -3, 7, 4, 0, 3, 7, 9], 7)); // Output: 5
