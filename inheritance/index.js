// 1)  Process of creating a constructor in javascript

function myConstructor() {
} // This is a constructor now :)

// 2) Process to create an instance method
myConstructor.prototype.instanceMethod = function () {
};

// 3) Process to extend a particular class
function iWillExtend() {
}

iWillExtend.prototype = new myConstructor();

var iAmExtened = new iWillExtend();

console.log(iAmExtened instanceof  iWillExtend) // true
console.log(iAmExtened instanceof  myConstructor) // true

// Thus the above idea shows how iAmExtended got the properties of myConstructor + iWillExtend


// Calling constructor of an object

var myInstance = new myConstructor();
var a = new myInstance.constructor();

console.log(a.constructor === myConstructor); // true


// ========== Getter and Setter Functions provided by the browser ========

/* todo : This need much better understanding, this is not clear as of now
 function Person(nameStr){
 var name = nameStr;

 this.__defineGetter__("name", function(){
 return name;
 });

 this.__defineSetter__("name", function(nameStr){
 name = nameStr;
 });
 }

 Person.prototype = {
 get name(){
 return this._name;
 },
 set name(nameStr){
 this._name = nameStr;
 }
 };
 */


/*
 * Eg. of inheritance in js
 *
 * */


function Animal() {
}
Animal.prototype = {
    group: "",
    gender: "",
    eat: function (breed) {
        console.log("An " + breed + " eats");
    },
    sleep: function (breed) {
        console.log("An " + breed + " sleeps");
    }
};

function Bird() {
}
Bird.prototype = new Animal();
Bird.prototype.fly = function () {
    return "bird flies"
};

/*
 * extend function is a wrapper to implement inheritance
 * */

function extend(subClass, superClass){
    function Inheritance(){};
    Inheritance.prototype = superClass.prototype;

    subClass.prototype = new Inheritance();
    subClass.prototype.constructor = subClass;
    subClass.baseConstructor = superClass;

    //for multiple inheritance
    if (superClass.__super__) {
        superClass.prototype.__super__ = superClass.__super__;
    }

    subClass.__super__ = superClass.prototype;
}

/*
* Usage of extend
* */

extend(Bird, Animal);

//Eg. This eg will show how to override the eat of super while using the same super function
Bird.prototype.eat = function(){
   return Bird.__super__.eat.apply(this) + "... caw !";
};

