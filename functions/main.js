/******************
****Задание 1******
******************/

function getSolutions( a , b , c ) {
  let D = b^2 - 4 * a * c;
  if ( D < 0 ) {
    return { D: `${D}` };
  } else if ( D === 0 ) {
    let x1 = ( -b ) / ( 2 * a );
    return { roots: [`${x1}`], D: `${D}` };
  } else {
    let x1 = ((-b) + Math.sqrt( D )) / (2 * a);
    let x2 = ((-b) - Math.sqrt( D )) / (2 * a);
    return { roots: [`${x1}`,`${x2}`], D: `${D}`};
  }
}

function showSolutionMessage( a , b , c ) {

}

console.log(getSolutions(2, 4, 2));



/******************
****Задание 1******
******************/
