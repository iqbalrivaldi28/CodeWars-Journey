//? Link soal: https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript 

//? Temukan usia muda, lalu usia tua, dan hitung selisihnya (jaraknya)

function differenceInAges(ages){
    
    const youngest = Math.min(...ages);
    const oldest = Math.max(...ages);

    const diffrent = oldest - youngest;
    
    return [youngest, oldest, diffrent];
}


console.log(differenceInAges([82, 15, 6, 38, 35]));
  