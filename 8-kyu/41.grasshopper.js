//? Link soal: https://www.codewars.com/kata/586c1cf4b98de0399300001d/train/javascript

function combat(health, damage) {
    let newHealth = health - damage;

    return (newHealth < 0) ? 0 : newHealth;
}


  console.log(combat(100, 95))