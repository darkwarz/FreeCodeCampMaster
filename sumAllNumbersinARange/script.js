
function sumAll(arr) {   // sumAll function adds all numbers in a range
  var maxNum = Math.max.apply(null,arr);
  //Uses math library to find max number in the array
  var minNum = Math.min.apply(null,arr);
  //Uses math library to find min number in the array
  
  var range = maxNum-minNum;
  //Used to get range for the loop
  var total = 0;
  //Total numers to be added

  for (var i=1;i<range;i++){
    total = total + minNum + i;
  }
  total = total + maxNum + minNum;
  //Adding min and max to total then returning  
  return total;
}
  

sumAll([1, 4]);
