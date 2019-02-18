Psuedo code:

sum all the prime numbers together and include num
build list of all prime numbers
add all prime numbers together

input: Number, may not be prime, Inclusive in algorithm. 0 through N. integer.
Output: Integer, sum of the prime number (+) from 2 up to input

Solution

Example:
Input : 10     output: 17
2 + 3 + 5 + 7 = 17

Solution :

Running total starts at 0
Find prime number for range: 2 through 10
         Num = 2
 Check if Num is Prime
        Add Num to running total
        Repeat with next number
        if not
        Repeat with next number

Add prime numbers
Print running total = 2 -> 5 -> 10 -> 17 // range

var total = 0;
for (var n = 2; n <= num; n++){
}

is prime
input: number, integer positives only 

Output: boolean

Loop 2 through n (non-inclusive)
check if input is divisible by current number
Not prime
if not 
check the next number
is prime?

