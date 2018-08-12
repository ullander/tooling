console.log("Nu kör vi!")
function test() {
  var enemy = hero.findEnemy();
  if (enemy) {
    hero.attack(enemy);
  }
}
