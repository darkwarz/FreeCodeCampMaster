
function chunkArrayInGroups(arr, size) {
  var wordArray = []; // creates word Array - serves as an anchor array
  var finalArray =[]; // creates finalArray  - serves as answer array
  for (i=0; i < arr.length; i+= size) { // for loop with arr.length and i+size loop 
    wordArray = arr.slice(i , size+i); // slice up arr turns it into letters then adds just the certain amount of letters using size and loop. adds each group
    finalArray.push(wordArray);  // adds word array final answer to finalArray
  }
  return finalArray;  // displays answer
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

