/*

A little boy is studying arithmetics. He has just learned how to add two integers, written one below another,
 column by column. But he always forgets about the important part - carrying.

Given two integers, your task is to find the result which the little boy will get.

Note: The boy had learned from this site, so feel free to check it out too if you are not familiar with column addition.

Example

For param1 = 456 and param2 = 1734, the output should be
additionWithoutCarrying(param1, param2) = 1180.

   456
  1734
+ ____
  1180
The boy performs the following operations from right to left:

6 + 4 = 10 but he forgets about carrying the 1 and just writes down the 0 in the last column
5 + 3 = 8
4 + 7 = 11 but he forgets about the leading 1 and just writes down 1 under 4 and 7.
There is no digit in the first number corresponding to the leading digit of the second one, so the boy imagines
 that 0 is written before 456. Thus, he gets 0 + 1 = 1.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer param1

A non-negative integer.

Guaranteed constraints:
0 ≤ param1 < 105.

[input] integer param2

A non-negative integer.

Guaranteed constraints:
0 ≤ param2 < 6 · 104.

[output] integer

The result that the little boy will get by using column addition without carrying.

*/

function additionWithoutCarrying(p1, p2) {
    var rez="";
    var n1= p1.toString(); 
    n1=n1.split("").reverse();
    var n2= p2.toString(); 
    n2=n2.split("").reverse();  
    
    var l = (n1.length>=n2.length) ? n1.length: n2.length ;
    
    var s1,s2,o;

    for(var i=0;i<l;i++){
      s1=n1[i]; if(s1===undefined){s1=0;}
       s2=n2[i]; if(s2===undefined){s2=0;}
    o=parseInt(s1)+parseInt(s2); 
    if(o>10){o=Math.floor(o=o-10);}else if(o===10){o=0;}    
     o=o.toString();
      rez=o+rez;
     
    }
    
    return parseInt(rez);
      
  }