
function getIndexToIns(arr, num) {
  //1 insert num into array
  arr.push(num);
  //2 sort array in ascending order
  arr = arr.sort(function(a, b){
    return a - b;
  });
  //3 find the position of num in sorted array 4 return that position
  return arr.indexOf(num);
}

//<<---- Pseudo Code --->>>>
// 1. insert num into array
// 2. sort array in ascending order
// 3. find the position of num in sorted array 
// 4. return that position