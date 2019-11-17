function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;
}

function checkBirthday(birthday) {
  let now = Date.now();
  let bDay = new Date(birthday);
  if ( now - bDay >= 567993600000) { // 567993600000 = 18 лет в милисекундах. В подсчете високосных лет нет необходимости.
    return true;
  } else {
    return false;
  }
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;
}

function getAnimalSound(animal) {
    if ( animal == 'undefined') {
      return null;
    }
    let sound = animal.sound;
    if (animal != 'undefined') {
      return sound;
    }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let avrg = null;
    for (let i = 0; i < marks.length; i++) {
      avrg += parseInt(marks[i]);
    }
    avrg = avrg / marks.length;
    return Math.round(avrg);
}
