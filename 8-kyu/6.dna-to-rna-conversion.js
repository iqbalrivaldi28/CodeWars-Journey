//? Link soal: https://www.codewars.com/kata/5556282156230d0e5e000089

//? Versi Biasa
function DNAtoRNA(dna) {
  let rna = '';

  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === 'T') {
      rna = rna + 'U';
    } else {
      rna = rna + dna[i];
    }
  }

  return rna;
}

console.log(DNAtoRNA('GCAT'));

//? Versi Map
function DNAtoRanaMAP(dna) {
  return dna
    .split('')
    .map((el) => (el === 'T' ? 'U' : el))
    .join('');
}

console.log(DNAtoRanaMAP('GCATT'));

//? Versi Regex
const DNAtoRNARegex = (dna) => {
  return dna.replaceAll('T', 'U'); //? Huruf T diganti U
};

console.log(DNAtoRNARegex('GCATTT'));
