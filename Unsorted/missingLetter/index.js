//  1.First character ='a'
//  2.Check if next letter is next in alphabet
//  3.Check if another letter available
//  4.  go to next letter
//  5.else
//  6.  return undefined
//  7.else
//  8.Return expected character

function fearNotLetter(str) {
 // var firstChar = str[0];
  //console.log(firstChar.charCodeAt(0));
  //console.log("char code of a:", "a".charCodeAt(0)); 
  for (var i = 0; i < str.length -1; i++) {
  if(str.charCodeAt(i + 1) == str.charCodeAt(i) + 1) {
        console.log("Next char is next in alphabet");
      } else { 
        return String.fromCharCode(str.charCodeAt(i) + 1); 
      } 
  }
  //return undefined;
}
fearNotLetter("abce");
console.log(fearNotLetter("ab"));
//rules
// input - String of charactoers "a-z" no special chars, no wrap around 'z to a'
//a! = A    no capital letters
//output - undefined if no charactor is missing || the missing character , Same // items as above
//Same items as above. Single possible missing character.
//Example: 
//input: "abce" Output: "d"