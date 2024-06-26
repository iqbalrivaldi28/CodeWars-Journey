//? Link soal: https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

//? Menghilangkan tanda seru

function removeExclamationMarks(s) {
  let result = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '!') {
      result = result + s[i];
    }
  }

  return result;
}

console.log(removeExclamationMarks('Hello World!'));
console.log(removeExclamationMarks('aku! suka! kamu!!!'));

