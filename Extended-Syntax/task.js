

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
    // код для задачи №1 писать здесь
    //return x;
    "use strict"
    let x = [];
    let discr = Math.pow(b , 2) - 4 * a * c;
    console.log(discr);
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
    // код для задачи №2 писать здесь
    //return averageMark;
    let marksArr = marks;
    let marksSumm = 0 ;
    if (marksArr.length > 5) {
      marksArr = marksArr.slice(0, 5);
      console.log('Внимание! Кол-во оченок больше 5.');
      alert('Внимание! Кол-во оченок больше 5.');
    }
    for (var i = 0; i < marksArr.length; i++) {
      marksSumm = marksSumm + marksArr[i];
    }
    avrgMark = marksSumm / marksArr.length;
    return avrgMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    //console.log(result)
    //return result;
}
