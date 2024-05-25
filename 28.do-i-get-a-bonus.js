//? Link soal: https://www.codewars.com/kata/56f6ad906b88de513f000d96

//? Kalau bonus true di kali 10 kalau false ngak ada bonus

function bonusTime(salary, bonus) {
  return `£${bonus ? salary * 10 : salary}`;
}

console.log(bonusTime(25000, true));
console.log(bonusTime(60000, false));
