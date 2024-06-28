//? Link soal: https://www.codewars.com/kata/52ab60b122e82a6375000bad/train/javascript

//? Kita diminta untuk mengurutkan daftar nama rusa berdasarkan karakter terakhir

function sortReindeer(reindeerNames) {
  // Todo 1 Urutkan nerdasarkan nama belakang
  return reindeerNames.sort((a, b) => {
    // Todo 2 pisahkan nama dengan dan belakang
    const lastNameA = a.split(' ')[1];
    const lastNameB = b.split(' ')[1];

    // Todo 3 bandingin nama belakang
    if (lastNameA < lastNameB) {
      return -1;
    }

    if (lastNameA > lastNameB) {
      return 1;
    }

    return 0;
  });
}

//? Data dummy
const reindeerNames = [
    'Dasher Tonoyan', 
    'Dancer Moore', 
    'Prancer Chua', 
    'Vixen Hall', 
    'Comet Karavani', 
    'Cupid Foroutan', 
    'Donder Jonker', 
    'Blitzen Claus'
];


console.log(sortReindeer(reindeerNames));