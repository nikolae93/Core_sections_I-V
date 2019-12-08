/*

Remove a part of a given array between given 0-based indexes l and r (inclusive).

Example

For inputArray = [2, 3, 2, 3, 4, 5], l = 2, and r = 4, the output should be
removeArrayPart(inputArray, l, r) = [2, 3, 5].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

Guaranteed constraints:
2 ≤ inputArray.length ≤ 104,
-105 ≤ inputArray[i] ≤ 105.

[input] integer l

Left index of the part to be removed (0-based).

Guaranteed constraints:
0 ≤ l ≤ r.

[input] integer r

Right index of the part to be removed (0-based).

Guaranteed constraints:
l ≤ r < inputArray.length.

[output] array.integer

*/

function removeArrayPart(arr, l, r) {
    for(var i=0;i<arr.length;i++){
      if(i>=l && i<=r){arr[i]=999}
    }
    var f=[];
    for(var j=0;j<arr.length;j++){
      if(arr[j]!==999){f.push(arr[j])}
    }
    return f
  }