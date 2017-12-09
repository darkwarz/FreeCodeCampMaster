function findLongestWord(str) {
    var longestWord = 0; // original charactor count of 0
    str = str.split(" "); // makes string into multiple letters
    for (var i = 0; i < str.length; i++) { // for loop, going through array
        if (str[i].length > longestWord) { // checks string array for longest word
            longestWord = str[i].length; // converts longestword to array of charectors, counts them basically
        }
    }
    return longestWord; // returns longest charactor count word
}

findLongestWord("The quick brown fox jumped over the lazy dog")

// .length counts how many characters are in a array

//2nd method below

// function findLongestWord(str) {
//     str = str.split(" ").sort(function(a,b) {
//         return a.length - b.length;
//     });
//     return str[str.length- 1].length;
//     }
    
//     console.log(
//         findLongestWord("The Quick brown fox jumped over the lazy dog")
//         );
