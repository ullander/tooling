function test() {
  var enemy = hero.findEnemy();
  if (enemy) {
    hero.attack(enemy);
  }
}
