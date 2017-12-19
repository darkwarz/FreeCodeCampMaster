function isPrime(num) { // find prime numbers
  for(var n = 2; n < num; n++) { //ooping structure
    if (num % n == 0) { // if number is divisable by 2
      return false; // number is not prime
    }
  }
  return true;   // number is prime
}

function sumPrimes(num) {  // adds prime nums in range
  var total = 0;
for (var n = 2; n <= num; n++){
  // console.log()
 if (isPrime(n)) {
  // console.log(n, "is prime");
   total += n;  // total=total + n; long form
  }
}  
  return total;
 }
 
//console.log("2", isPrime(2));
//console.log("5", isPrime(5));
//console.log("9", isPrime(9));
sumPrimes(10);