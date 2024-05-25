//? Link soal: https://www.codewars.com/kata/568d0dd208ee69389d000016

function rentalCarCost(d) {
  let discount = 0;

  if (d >= 3) {
    discount = 20;
  }

  if (d >= 7) {
    discount = 50;
  }

  return d * 40 - discount;
}

console.log(rentalCarCost(8));
