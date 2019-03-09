function palindrome(str) {
  var symbols = /\W|_/g;   // this excludes spaces, symbols, globally    \W matches any non word charactor  //  __ matches literal __  //  | separates the two rules  // g = global
  var palindromic = str.replace(symbols,"").toLowerCase().split("").reverse("").join("");   // replace is replacing symbols with nothing // .toLowerCase makes all letters lower case // split turns into array // reverse flips text //  .join turns the text into a string
  return Boolean(str === palindromic);  // shows string and makes sure palindromic matches string
}