const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
 const squaredIntegers = arr.filter( (arr) => arr > 0 && arr % parseInt(arr) === 0 ).map( (arr) => Math.pow(arr, 2) );
  // change code above this line
  return squaredIntegers;
};
//arr.filter((arr)) takes all of the array and => converts arr greater than 0 and arr % parseInt (arr) = and greater than 0. and Arr % parseInt converts to integer. maps array by math.pow = powers of 2 (arr=everything in array, 2 = power)
// test your code
//Compute the square of only the positive integers(decimal numbers are not integers) in the array realNumberArray and store the new array in a variable squaredIntegers = should be 16,1764, 36 and use map,filter, reduce 
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);