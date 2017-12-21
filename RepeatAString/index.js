
function repeatStringNumTimes(str, num) {
  var aStr = ""; // assigns variable aStr to blank string
  while (num > 0) {  // while num variable is greater than 0
      aStr += str; // answerStr = answerStr.concat(str); also works the same way   and answerStr = answerStr + str; 
      // adds str variable to answerStr multiple times
      num--; // num = num - 1;
  }
  return aStr;
}

//console.log(
//repeatStringNumTimes("abc", 3)
//);
//<<--------------------------------------Psudo Code--------------------------->
// 
// string needs to be repeated Num amount of times 
//      Declare a variable string variable to put  empty string in   
//   1.    while num is greater than 0 do this --> rules out the negative number
//   2.    take empty string variable and add user str
//   3.    decrement num by 1 each time until num is 0 
//   4.    show value for declared string variable
//
//<<-------------------------------------End----------------------------------->
//<-----------------------Instructons------------------------------------------>
// Repeat a given string (first argument) num times (second argument). Return an 
// empty string if num is not a positive number.
//<<--------------------------------------------------------------------------->