function slasher(arr, howMany) {
  var choppedOff = arr.splice(0, howMany); // takes variable arr and cuts array head=0 by howMany and leave arr with less variables in array 
  return arr;
}

slasher([1, 2, 3], 2);
