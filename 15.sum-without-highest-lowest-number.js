//? Link soal: https://www.codewars.com/kata/576b93db1129fcf2200001e6

//? Menjumlahkan semua elemen array kecuali elemen terkecil dan terbesar
//? Disini di urutkan dulu arraynya
//? Kemudian baru mulai dari indek 1 dan length nta kurangi 1

function sumArray(array) {
  if (array === null || array.length <= 2) return 0;

  let sortedArray = array.sort((a, b) => a - b); 
  
  let result = 0;

  for (let i = 1; i < sortedArray.length - 1; i++) {
    result = result + sortedArray[i];
  }

  return result;
}


//? Cara kedua
function sumArrayDua(array){
    if(array == null || array <= 2) return 0;

    return array
    .sort((a,b) => a - b)
    .slice(1, -1)
    .reduce((acc, curr) => acc + curr)
}



console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArrayDua([0, 1, 6, 10, 10]));