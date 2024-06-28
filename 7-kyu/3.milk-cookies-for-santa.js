//? Link soal: https://www.codewars.com/kata/52af7bf41f5a1291a6000025/train/javascript

//? Anda diminta untuk membuat fungsi timeForMilkAndCookies yang menerima sebuah objek Date
//? dan mengembalikan true jika tanggal tersebut adalah Malam Natal (24 Desember), 
//? dan false jika tidak. Perlu diingat bahwa dalam JavaScript, bulan dalam objek Date dimulai dari 0 (Januari = 0, Februari = 1, ..., Desember = 11).

function timeForMilkAndCookies(date){
    
    const month = date.getMonth();

    const day = date.getDate();


    return month === 11 && day === 24;
}

console.log(timeForMilkAndCookies(new Date(2023, 11, 24)));