//* Jadi soalna gini
//* Ada satu hero yg mau ngalahin naga pake peluru
//* satu naga mati dengan 2 peluru
//* Jadi ketika ada 10 peluru dan 5 naga hasilnya akan True (Menang)

//? Link soal: https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript

function hero(bullets, dragons) {
  if (bullets / 2 >= dragons) {
    return true;
  } else {
    return false;
  }
}

console.log(hero(10, 5));

//? Bisa juga gini

function heroTwo(bullets, dragons) {
  const result = bullets / 2 >= dragons ? true : false;
  return result;
}

console.log(heroTwo(10, 5));


//? Coba sendiri

const game = (bullets, dragons) => {
  const result = bullets / 2 >= dragons ? true : false;
  return result;
}

console.log(game(10, 5));