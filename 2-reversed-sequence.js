//* Soalnya diminta untuk mengurutkan nilai terbesar ke terkecil
//* dari sebuah array

//? Link soal: https://www.codewars.com/kata/5a00e05cc374cb34d100000d

const reverseSeq = (n) => {
  let result = [];

  for (let i = n; i >= 1; i--) {
    result.push(i);
  }

  return result;
};

console.log(reverseSeq(5));

//? Bisa juga kayak ini

const reverseSeqTwo = (n) => {
  return Array(n)
    .fill()
    .map((el, i) => i + 1)
    .reverse();
};

console.log(reverseSeqTwo(3));

//? Coba sendiri

function urutAngka(n) {
  let result = [];

  for(let i = n; i >= 1; i--){
    result.push(i)
  }

  return result
}

console.log(urutAngka(4));
