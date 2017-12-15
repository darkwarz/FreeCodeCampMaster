function pairElement(str) {
   var charArray = str.split("");
   console.log(charArray);

   var pairArray = [];
   console.log(pairArray);
   for (var i = 0; i < charArray.length; i++) {
       if (charArray[i] === "G") {
           pairArray.push(["G", "C"]);
           console.log(pairArray);
       }
       else if (charArray[i] == "C") {
           pairArray.push(["C", "G"]);
           console.log(pairArray);
       }
       else if (charArray[i] === "A") {
           pairArray.push(["A", "T"]);
           console.log(pairArray);
       }
       else if (charArray[i] === "T") {
           pairArray.push(["T", "A"]);
           console.log(pairArray);
       }
   }
   return pairArray;
}

// Input - String of characters “a-z” no special chars, no wrap around ‘z to a’, case not important
// output  - undefined if no character is missing || the missing character. Same items as above. Single possible missing character.

// Example:
// Input: “bcdf”  Output: “e”

// 1 First character = first character of input

// 2 Check if next letter is next in alphabet.
// 	3 Check if another letter available
// 		4 Go to next letter and repeat step 2
// 	 5 else
// 		6 Return undefined
// 7 else
// 	8 Return expected character
