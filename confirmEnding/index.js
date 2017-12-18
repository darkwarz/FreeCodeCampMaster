function confirmEnding(str, target) {
  if (str.substr(-target.length) === target) {   
    // psuedo code
    // 1. if string sub string ends with target string 
    // 2. and it matches
    // 3. then return true 
    // 4. else return false
  
    return true;
  } else {
    return false;
  }
}
confirmEnding("Bastian", "n");

//check if string ends with given target string
//capital letters and lower case allowed no restriction
//