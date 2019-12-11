

const compareArrays = ( arr1 , arr2 ) => {
  if (Object.keys(arr1).length !== Object.keys(arr2).length) {
    return false;
  } else {
    return Object.keys(arr1).every(item => arr1[item] === arr2[item])
  }
}

console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4]));

const memoize = ( fn , limit ) => {
  return console.log(fn.arguments);
}

const summ = ( a , b ) => a + b ;
