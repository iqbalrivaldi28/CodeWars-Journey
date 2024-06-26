//* DIminta untuk mengabungkan kata dari array menjadi satu bagian kata yg urut

//? Link soal = https://www.codewars.com/kata/53dc23c68a0c93699800041d

function smash(words) {
  return words.join(' ');
}

console.log(smash(['this', 'is', 'a', 'really', 'long', 'sentence']));

//? Bisa juga gini, pake arrow function

const smashTwo = (words) => words.join(' ');

console.log(smashTwo(['Aku', 'suka', 'kamu']));




//? Try urut angka besar ke kecil
function urutAngka(x) {
  let result = [];

  for(let i = x; i >= 1; i--){
    result.push(i)
  }
  
  return result
}

console.log(urutAngka(6));
