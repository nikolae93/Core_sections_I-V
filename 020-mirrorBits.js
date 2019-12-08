/*

Reverse the order of the bits in a given integer.

Example

For a = 97, the output should be
mirrorBits(a) = 67.

97 equals to 1100001 in binary, which is 1000011 after mirroring, and that is 67 in base 10.

For a = 8, the output should be
mirrorBits(a) = 1.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer a

Guaranteed constraints:
5 ≤ a ≤ 105.

[output] integer

*/

function dec2Bin(dec)
{
    if(dec >= 0) {
        return dec.toString(2);
    }
    else {
        return (~dec).toString(2);
    }
}

//main
function mirrorBits(a) {
   var binum = dec2Bin(a);
  
   binum= binum.split("").reverse().join("");
    
    return parseInt(binum,2);
}