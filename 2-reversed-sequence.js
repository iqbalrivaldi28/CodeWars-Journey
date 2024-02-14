//* Soalnya diminta untuk mengurutkan nilai terbesar ke terkecil
//* dari sebuah array

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
    .map((el, i) => i + 1).reverse;
};
