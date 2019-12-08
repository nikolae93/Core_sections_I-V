/*

One night you go for a ride on your motorcycle. At 00:00 you start your engine, and the built-in timer
 automatically begins counting the length of your ride, in minutes. Off you go to explore the neighborhood.

When you finally decide to head back, you realize there's a chance the bridges on your route home are up,
 leaving you stranded! Unfortunately, you don't have your watch on you and don't know what time it is.
  All you know thanks to the bike's timer is that n minutes have passed since 00:00.

Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital
 timer in the format hh:mm would show.

Example

For n = 240, the output should be
lateRide(n) = 4.

Since 240 minutes have passed, the current time is 04:00. The digits sum up to 0 + 4 + 0 + 0 = 4, which is the answer.

For n = 808, the output should be
lateRide(n) = 14.

808 minutes mean that it's 13:28 now, so the answer should be 1 + 3 + 2 + 8 = 14.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

The duration of your ride, in minutes. It is guaranteed that you've been riding for less than a day (24 hours).

Guaranteed constraints:
0 ≤ n < 60 · 24.

[output] integer

The sum of the digits the digital timer would show.

*/

function lateRide(n) {
    var h= Math.floor(n/60);
    var m= n-(h*60);
    console.log(h,m);
    h=h.toString();
    m=m.toString();
    var c1; if(h[0]){ c1=parseInt(h[0])}else{c1=0}
    var c2; if(h[1]){ c2=parseInt(h[1])}else{c2=0}
    var c3; if(m[0]){ c3=parseInt(m[0])}else{c3=0}
    var c4; if(m[1]){ c4=parseInt(m[1])}else{c4=0}
    return c1+c2+c3+c4;
}