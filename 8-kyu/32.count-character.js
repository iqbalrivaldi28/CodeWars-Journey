//? Link soal: https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript


function strCount(str, letter){  
    let count = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] === letter){
            count++;
        }
    }

    return count
  }

console.log(strCount("hello", 'l')); //? Ouputnta ada 2 huruf l
