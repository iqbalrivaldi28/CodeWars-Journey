//? Link soal: https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript

function updateLight(current) {
  if (current === 'green') {
    return 'yellow';
  }

  if (current === 'yellow') {
    return 'red';
  }

  if (current === 'red') {
    return 'green';
  }
}

//? Kalau pake ternary operator
function updateLightDua(current) {
  return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green';
}   

console.log(updateLight('green'));
console.log(updateLight('yellow'));
console.log(updateLight('red'));

console.log(updateLightDua('green'));
console.log(updateLightDua('yellow'));
console.log(updateLightDua('red'));
