/*

You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers
 from a to b inclusive. You need to count the number of 1s in the binary representations of all
  the numbers in the array.

Example

For a = 2 and b = 7, the output should be
rangeBitCount(a, b) = 11.

Given a = 2 and b = 7 the array is: [2, 3, 4, 5, 6, 7]. Converting the numbers to binary, 
we get [10, 11, 100, 101, 110, 111], which contains 1 + 2 + 1 + 2 + 2 + 3 = 11 1s.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer a

Guaranteed constraints:
0 ≤ a ≤ b.

[input] integer b

Guaranteed constraints:
a ≤ b ≤ 10.

[output] integer

*/

//Helper functions
function dec2Bin(dec)
{
    if(dec >= 0) {
        return dec.toString(2);
    }
    else {
        return (~dec).toString(2);
    }
}

function countOne(str){
    if(str.length===0){return 0}
    var c=0;
    for(var i=0;i<str.length;i++){
        if(str[i]==1){c++;}
    }
    return c;
}

//Main
function rangeBitCount(a, b) {
    var nizBy=[];  
     for(var i=a;i<=b;i++ ){
         nizBy.push(dec2Bin(i));
     }
       var sum=0;
    
    for(var j=0;j<nizBy.length;j++){
        sum= sum + countOne(nizBy[j]);
    }
    return sum;
}