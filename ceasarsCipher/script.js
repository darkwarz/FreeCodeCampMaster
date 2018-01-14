function rot13(str) { // LBH QVQ VG!
  var solved = ""; // variable blank string
  for (var i=0; i<str.length; i++) { // for loop to read through array
    var asciiNum = str[i].charCodeAt(); // variable asciiNum finds charCode for letters from ascii
    if (asciiNum >= 65 && asciiNum <= 77) { // looks for ascii numbers from 65-77
      solved += String.fromCharCode(asciiNum + 13); // searchs for letter based on number + 13 when in range 
    } else if (asciiNum >=78 && asciiNum <= 90) { // looks for ascii numbers from 78 - 90
      solved += String.fromCharCode(asciiNum - 13); // searchs for letter based on number - 13 when in range
    } else {
      solved += str[i]; // displays result + adds on each letter that was deciphered
    }
 }
  return solved; // answered displayed
}

// [a, b, c, d, e, f, g, h ,i ,j ,k, l, m , n , o , p, q, r, s, t, u, v, w, x, y, z]
// alphabet for reference

// Change the inputs below to test
rot13("SERR PBQR PNZC");