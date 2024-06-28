//? Link soal: https://www.codewars.com/kata/58bcd27b7288983803000002

//? Kita di pinta untuk menentukan jika ada huruf g dikanan atau kiri huruf g maka akan true

function gHappy(str) {
    //coding and coding..
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'g'){
            if(str[i - 1] !== 'g' && str[i + 1] !== 'g'){
                return false
            }
        }

    }
    
    return true

}


console.log(gHappy("ggg0gg3gg0gg")); //! True 
console.log(gHappy("gjjg")); //! False 