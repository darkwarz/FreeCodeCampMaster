function largestOfFour(arr) {
  var largestArray=[]; // declared empty Array
  // You can do this!
  for (var i=0;i<arr.length;i++){ // for loop for i
    var largestNumber=0; // declared variable
    for(var j=0;j<arr.length;j++){ // second for loop for j 
      if(largestNumber<arr[i][j]){ // largestNumber 
        largestNumber=arr[i][j];
      }
    }
    largestArray.push(largestNumber);
  }
  return largestArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// return largest number sub array