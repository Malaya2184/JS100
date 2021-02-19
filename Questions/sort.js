// find the 2nd largest element in a given set of numbers


var numArray = [];
var i;
        for (i = 0; i < 5; i++) {
            numArray.push(prompt("Input 5 numbers :"));
        }
numArray.sort(function(a, b) {
  return a - b;
});

console.log(numArray[numArray.length-2]);
