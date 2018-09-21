const myConcat = (arr1, arr2) => { // => es6 javascript says => is also equal to the word function, also not advised to use var
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));