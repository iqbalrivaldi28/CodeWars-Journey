//? Link soal: https://www.codewars.com/kata/50654ddff44f800200000007

function solution(a, b){
    if(a.length < b.length){
        return a + b + a;
    }else {
        return b + a + b;
    }
  }


  console.log(solution("1", "22"));