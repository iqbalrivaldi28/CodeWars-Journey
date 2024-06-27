//? Link soal: https://www.codewars.com/kata/56644a421b7c94c622000056/train/javascript

//? Membandingkan 2 probality

function mostLikely(prob1,prob2){

    const [num1, denom1] = prob1.split(':').map(Number);

    const [num2, denom2] = prob2.split(':').map(Number);

    const probalitiy1 = num1 / denom1;

    const probalitiy2 = num2 / denom2;

    return probalitiy1 > probalitiy2;
}



console.log(mostLikely('1:3', '1:2')); // Output: false
console.log(mostLikely('1:2', '1:3')); // Output: true
console.log(mostLikely('2:3', '1:2'));