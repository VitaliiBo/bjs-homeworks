const compareArrays = ( arr1 , arr2 ) => {
  if (Object.keys(arr1).length !== Object.keys(arr2).length) {
    return false;
  } else {
    return Object.keys(arr1).every(item => arr1[item] === arr2[item])
  }
}

console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4]));

function memoize( fn , limit ) {
  return function () {
    const results = [];
      const values = Array.from(arguments);
      let resultsCompare = results.find( result => compareArrays(result.args , values));
      if (resultsCompare) {
         return `${resultsCompare}`;
      }
      if (results.length > limit) {
        results.shift()
      }
      return results.push({
        args: values ,
        result: fn()
      })
    }
}

const summ = ( a , b ) => a + b ;
const mSum = memoize( summ , 2 );

mSum(3,3)
