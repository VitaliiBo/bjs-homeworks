function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.innerHTML = result;
}

function calculateTotalMortgage(percent , contribution , amount , date) {
  "use strict"
  let totalAmount = '';
  if ( !Number(percent) && percent != 0 ) {
     totalAmount += `<br>Поле "Процентная ставка" может сожержать только цифры. Вы ввели \'${percent}\'.`;
  }
  if ( !Number(contribution) && contribution != 0 ) {
     totalAmount += `<br>Поле "Начальный взнос" может сожержать только цифры. Вы ввели \'${contribution}\'.`;
  }
  if ( !Number(amount) && amount != 0 ) {
     totalAmount += `<br>Поле "Общая стоимость" может сожержать только цифры. Вы ввели \'${amount}\'.`;
  }
  if ( percent === '' || contribution === '' || amount === '' || date === '' ) {
    totalAmount += '<br>Введите все значения';
  }
  let creditSumm = amount - contribution; // Сумма кредита
  let presentDate = new Date(); // Текущая Дата
  let creditDate = new Date(date); // Срок Ипотеки
  let P = (( percent / 12 ) / 100 );
  let monthsSumm = ( 12 - ( presentDate.getMonth() + 1)) + 12 * ( creditDate.getFullYear() - ( presentDate.getFullYear() )) - ( 12 - (creditDate.getMonth() + 1));
  if ( totalAmount == false ) {
    let payPerMonth = creditSumm * ( P + P / ( Math.pow((1+P),monthsSumm) - 1 )); //Плата за Месяц
    totalAmount = monthsSumm * payPerMonth;
    totalAmount = totalAmount.toFixed(2);
  }
  return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
  let noName = '';
  if ( typeof name == "string" && name !== '' && name != 'null' && name != 'undefined' && name != '\"\"' && name.charAt(0) != ' ' ) {
    noName = name;
  } else {
    noName = "Аноним";
  }
  let greeting = `Привет, Мир! Меня зовут ${noName}.`;
  console.log(greeting);
  return greeting;
    // код для задачи №2 писать здесь
    //return greeting;
}
