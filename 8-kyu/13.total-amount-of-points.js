//? Link soal: https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {
  let result = 0;

  for (let i = 0; i < games.length; i++) {
    if (games[i][0] > games[i][2]) {
      result = result + 3;
    } else if (games[i][0] === games[i][2]) {
      result = result + 1;
    }
  }

  return result;
}

console.log(points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']));
