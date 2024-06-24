//? Link soal: https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

//? JIka angka kurang < 5 = 0 selain itu jadi 1

function fakeBin(x){
    return x.split('')
        .map(digit => digit < '5' ? '0' : '1')
        .join('')
}

console.log(fakeBin("1, 2, 3, 4, 5"));