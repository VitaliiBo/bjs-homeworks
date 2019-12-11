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
// const staff = new Weapon ('Посох', 8, 300, 2);
// const sword = new Weapon ('Меч', 25, 500, 1);
// const dagger = new Weapon ('Нож', 5, 300, 1);
// const bow = new Weapon ('Лук', 10, 200, 3);
// const fist = new Weapon ('Рука', 1, Infinity, 1);
//
// const longBow = new Weapon ('Длинный лук', 15, 200, 4 );
// const axe = new Weapon ('Секира', 27, 800, 1);
// const stormStaff = new Weapon ('Посох Бури', 10, 300, 3);
/************************
*******Задание 2*********
************************/
class Staff extends Weapon {
  constructor(name, attack, durability, range) {
    super('Посох', 8, 300, 2);
  }
}
class Sword extends Weapon {
  constructor(name, attack, durability, range) {
    super('Меч', 25, 500, 1);
  }
}
class Dagger extends Weapon {
  constructor(name, attack, durability, range) {
    super('Нож', 5, 300, 1);
  }
}
class Bow extends Weapon {
  constructor(name, attack, durability, range) {
    super('Лук', 10, 200, 3);
  }
}
class Fist extends Weapon {
  constructor(name, attack, durability, range) {
    super('Рука', 1, Infinity, 1);
  }
}
class LongBow extends Bow {
  constructor() {
    super();
    this.name = 'Длинный лук';
    this.attack = 15;
    this.range = 4;
  }
}
class Axe extends Sword {
  constructor() {
    super();
    this.name = 'Секира';
    this.attack = 27;
    this.durability = 800;
  }
}
class StormStaff extends Staff {
  constructor() {
    super();
    this.name = 'Посох Бури';
    this.attack = 10;
    this.range = 3;
  }
}
/************************
*******Задание 3*********
************************/
class StudentLog {
  constructor(name) {
    this.name = name;
    this.subjects = {};
  }
  getName() {
    return this.name;
  }
  addGrade(grade, subject) {
    if (grade > 0 && grade <= 5 ) {
      if (subject in this.subjects) {
        this.subjects[subject].push(grade);
      } else {
          this.subjects[subject] = [];
          this.subjects[subject].push(grade);
        }
    } else {
        console.log(`Вы пытались поставить оценку "${grade}", принимаются только оценки от 1 до 5`);
        if (!(subject in this.subjects)) {
          this.subjects = {[subject]:[]}
      }
    }
    return this.subjects[subject].length;
  }
  getAverageBySubject(subject) {
    if (subject in this.subjects) {
      let summ = 0;
      for (let i = 0; i < this.subjects[subject].length; i++) {
        summ += this.subjects[subject][i];
      }
      return summ / this.subjects[subject].length
    } else { return 0; }
  }
  getTotalAverage() {
    let summ = 0;
    let quantity = 0;
    for (let key in this.subjects) {
      quantity += this.subjects[key].length;
      for (let i = 0; i < this.subjects[key].length; i++) {
        summ += this.subjects[key][i];
      }
    }
    if ( isNaN( summ / quantity )) {
      return 0;
    } else {
      return summ / quantity;
      }
  }
}
