/**
 * Created by rmeghl on 5/12/2014.
 */


/*
 * Implementing Prototype Pattern using Object.create method
 * Note: This type of implementation will not work in IE8
 * */
var obj1 = {
    name: "test1"
};

var obj2 = Object.create(obj1);

var obj3 = Object.create(obj1, {
    "name1": {
        value: "test2"
    }
});  // {name1 : test2, name : test1}
