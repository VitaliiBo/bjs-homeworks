class Weapon {
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
    this.thirtyPercentDurability = (this.durability / 100) * 30;
  }

  takeDamage(damage) {
    this.durability = this.durability - damage;
    if (this.durability >= 0) {
      return this.durability;
    } else {
      return this.durability = 0;
    }
  }
  getDamage() {
    if (this.durability === 0) {
      return this.attack = 0;
    } else if (this.durability <= this.thirtyPercentDurability) {
      return this.attack / 2;
    } else {
      return this.attack;
    }
  }

  isBroken() {
    if (this.durability > 0 || this.durability === Infinity) {
      return false;
    } else {
      return true;
    }
  }

}

const staff = new Weapon ('Посох', 8, 300, 2);
const sword = new Weapon ('Меч', 25, 500, 1);
const dagger = new Weapon ('Кинжал', 5, 300, 1);
const bow = new Weapon ('Лук', 10, 200, 3);
const fist = new Weapon ('Кулак', 1, Infinity, 1);
