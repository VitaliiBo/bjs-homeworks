/******************
****Задание 1******
******************/
function getSolutions( a = 1 , b = 1 , c ) {
  let D = Math.pow( b , 2 ) - 4 * a * c;
  if ( D < 0 ) {
    return { D: `${D}` };
  } else if ( D === 0 ) {
    let x1 = ( -b ) / ( 2 * a );
    return { roots: [`${x1}`], D: D };
  } else {
    let x1 = ((-b) + Math.sqrt( D )) / (2 * a);
    let x2 = ((-b) - Math.sqrt( D )) / (2 * a);
    return { roots: [`${x1}`,`${x2}`], D: D };
  }
}
function showSolutionMessage( a , b , c ) {
  let result = getSolutions( a , b , c );
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if ( result.D < 0) {
    console.log(`Уравнение не имеет вещественных корней` + '. I got NO ROOTS, but home was never on the ground!');
  } else if ( result.D === 0 ) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }
}
showSolutionMessage( 1 , 2 , 3);
showSolutionMessage( 7 , 20 , -3);
showSolutionMessage( 2 , 4 , 2);
/******************
****Задание 2******
******************/
function getAverageScore( data ) {
  let average = [];
  for (let prop in data) {
    data[prop] = getArrAvrg( data[prop] );
    average.push(data[prop]);
  }
  data.average = getArrAvrg( average );
  return data;
}
function getArrAvrg( arr ) {
  let summ = 0;
  for (let i = 0; i < arr.length; i++) {
    summ += arr[i];
  }
  return summ / arr.length;
}
console.log( getAverageScore({
  algebra: [ 2, 4, 5, 2, 3, 4 ],
  geometry: [ 2, 4, 5 ],
  russian: [ 3, 3, 4, 5 ],
  physics: [ 5, 5 ],
  music: [ 2, 2, 6],
  english: [ 4, 4, 3 ],
  poetry: [ 5, 3, 4],
  chemistry: [ 2 ],
  french: [ 4, 4 ]
}));
/******************
****Задание 3******
******************/
function getPersonData( secretData ) {
  for (let prop in secretData) {
    secretData[prop] = getName(secretData[prop]);
  }
  return {
    firstName: secretData.aaa,
    lastName: secretData.bbb
  };
}
function getName( number ) {
  if ( number === 1 ) {
    return "Родриго"
  } else if ( number === 0 ) {
    return "Эмильо";
  }
}
console.log( getPersonData({
  aaa: 0,
  bbb: 0
}));
console.log( getPersonData({
  aaa: 1,
  bbb: 0
}));
console.log( getPersonData({
  aaa: 1,
  bbb: 1
}));
console.log( getPersonData({
  aaa: 0,
  bbb: 1
}));
