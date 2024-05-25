//? Link soal: https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

function monkeyCount(n) {
    let result = [];
    
    for(let i = 1; i <= n; i++){
        result.push(i)
    }

    return result
}



console.log(monkeyCount(5));