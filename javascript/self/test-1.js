
var a = { name: "a",
          fun:  function() { return this }
        }

console.log(a.fun());





var bFunc = function() { return this };
//console.log(bFunc());

var b = {name: "b",
         fun:  bFunc
        }

console.log(b.fun()); // differs from expectation on (Functional Javascript/Michal Fogus/p32)


//-----------------------------------------------
// this and scope
var a = "a1";
var funOne = function() {
    var a = "funOne.a";
    return this;
}

var funTwo = function(otherFun) {
    console.log(a+"  otherFun:"+otherFun);
}

//funTwo(a);

funTwo(funOne());



