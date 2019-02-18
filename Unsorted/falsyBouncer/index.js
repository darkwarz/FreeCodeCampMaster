function bouncer(arr) {
  arr = arr.filter(falsyBouncer); // declare variable = to itself with filter and function within
  return arr;  // returns statement
}

function falsyBouncer(arg) { // function within arf.filter
  return (Boolean(arg) === true); // true or false, checks if it is truee or not
}


bouncer([7, "ate", "", false, 9]);
