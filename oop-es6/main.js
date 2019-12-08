/************************
*******Задание 1*********
************************/
class Weapon {
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
    this.thirtyPercentDurability = (this.durability / 100) * 30;
  }

  takeDamage(damage) {
    if (damage === undefined) {
      return this.durability;
    }
    this.durability = this.durability - damage;
    if (this.durability <= 0) {
      return this.durability = 0;
    } else {
      return this.durability;
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
const dagger = new Weapon ('Нож', 5, 300, 1);
const bow = new Weapon ('Лук', 10, 200, 3);
const fist = new Weapon ('Рука', 1, Infinity, 1);

const longBow = new Weapon ('Длинный лук', 15, 200, 4 );
const axe = new Weapon ('Секира', 27, 800, 1);
const stormStaff = new Weapon ('Посох Бури', 10, 300, 3);

/************************
*******Задание 2*********
************************/

class Staff extends Weapon {
  constructor(name, attack, durability, range) {
    super(name, attack, durability, range);

  }
}


/************************
*******Задание 3*********
************************/
