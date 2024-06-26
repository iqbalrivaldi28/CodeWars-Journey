//? Link soal: https://www.codewars.com/kata/57bfea4cb19505912900012c/train/javascript

function symmetricPoint(p, q) {
    // Hitung koordinat X dari titik P1
    const p1x = 2 * q[0] - p[0];
    // Hitung koordinat Y dari titik P1
    const p1y = 2 * q[1] - p[1];
    // Kembalikan titik P1 sebagai array
    return [p1x, p1y];
  }
  
  // Contoh penggunaan
  console.log(symmetricPoint([1, 2], [2, 3])); // Output: [3, 4]
  console.log(symmetricPoint([4, 5], [1, 1])); // Output: [-2, -3]
  console.log(symmetricPoint([10, -10], [0, 0])); // Output: [-10, 10]
  