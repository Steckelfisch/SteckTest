var _ = require('underscore');


function createAdder(valToAdd) {
  var toAdd = valToAdd;
  return function(x){ return x+toAdd };
}



var add10 = createAdder(10);
console.log( '2 + 10 = '+add10(2) );


function ZZZ(n) {
  console.log(n+'+10='+add10(n));
}

var numArray = [1,2,3,4,5,6,7,8,9,23,24,25,15,1,61,76176,34];
_.each(numArray, ZZZ);











