"use strict"

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){


    let x = [];
    let discr = Math.pow(b , 2) - 4 * a * c;
    if (discr > 0) {
      x.push((-b+(Math.sqrt(discr)))/2*a);
      x.push((-b-(Math.sqrt(discr)))/2*a);
    } else if (discr === 0 ) {
      x.push(-b/(2*a));
    }

    return x;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){

    let marksArr = marks;
    let marksSumm = 0 ;
    if (marksArr.length > 5) {
      marksArr = marksArr.slice(0, 5);
      console.log('Внимание! Кол-во оченок больше 5.');
    }
    for (let i = 0; i < marksArr.length; i++) {
      marksSumm += marksArr[i];
    }
    let avrgMark = marksSumm / marksArr.length;
    return avrgMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){

    let currentDate = new Date().getFullYear();
    let userBirthYear = dateOfBirthday.getFullYear();
    let age = currentDate - userBirthYear;
    if (age >= 18) {
      alert('Не желаете ли олд-фэшн, ' + name + '?');
    } else {
      alert('Сожалею, ' + name + ', но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!')
    }
}
