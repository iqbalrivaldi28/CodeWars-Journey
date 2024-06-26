//? Link soal: https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript

//? Anda diminta untuk menghitung jumlah halaman kosong yang dibutuhkan untuk menyalin pekerjaan tulis dengan mempertimbangkan jumlah siswa (n) dan jumlah halaman (m). Jika n atau m kurang dari 0, kembalikan 0.

function paperwork(n, m) {
  if ((n < 0) | (m < 0)) {
    return 0;
  }

  return n * m;
}


//! Cara singkatnya
function paperwork(n, m) {
    return n > 0 && m > 0 ? n * m : 0
  }

console.log(paperwork(5, 5));
