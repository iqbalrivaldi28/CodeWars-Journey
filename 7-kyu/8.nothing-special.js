//? Link soal: https://www.codewars.com/kata/57029e77005264a3b9000eb5/train/javascript

function nothingSpecial(str) {
  if (typeof str !== 'string') {
    return 'Not a string!';
  }

  return str.replace(/[^a-zA-Z0-9\s]/g, '');
}


console.log(nothingSpecial("Hello, World! 123")); // Output: "Hello World 123"
console.log(nothingSpecial("This is a test! @#%")); // Output: "This is a test "
console.log(nothingSpecial(12345)); // Output: "Not a string!"
console.log(nothingSpecial("Just some text 42")); // Output: "Just some text 42"
