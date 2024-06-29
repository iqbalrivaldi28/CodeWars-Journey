//? Link soal: https://www.codewars.com/kata/54fdadc8762e2e51e400032c

function myParseInt(str) {
  // Trim whitespace dari kedua ujung string
  str = str.trim();

  // Cek apakah string hanya mengandung angka
  if (/^\d+$/.test(str)) {
    return parseInt(str, 10);
  }

  // Jika string tidak valid, kembalikan "NaN"
  return 'NaN';
}


console.log(myParseInt("10")); // Output: 10
console.log(myParseInt("10 apples")); // Output: "NaN"
console.log(myParseInt("   42   ")); // Output: 42
console.log(myParseInt("42.5")); // Output: "NaN"
console.log(myParseInt("0042")); // Output: 42
console.log(myParseInt("   0042   ")); // Output: 42
console.log(myParseInt("")); // Output: "NaN"
console.log(myParseInt("  ")); // Output: "NaN"
console.log(myParseInt("123abc")); // Output: "NaN"
console.log(myParseInt("abc123")); // Output: "NaN"
