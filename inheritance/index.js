// 1)  Process of creating a constructor in javascript

function myConstructor(){} // This is a constructor now :)

// 2) Process to create an instance method
myConstructor.prototype.instanceMethod = function(){};

// 3) Process to extend a particular class
function iWillExtend(){}

iWillExtend.prototype = new myConstructor();

var iAmExtened = new iWillExtend();

console.log(iAmExtened instanceof  iWillExtend) // true
console.log(iAmExtened instanceof  myConstructor) // true

// Thus the above idea shows how iAmExtended got the properties of myConstructor + iWillExtend