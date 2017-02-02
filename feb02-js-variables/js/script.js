// var externalJavascript = "wha da actual heck";

var camelCase;
var not_camel_case;
var camel_Case;
var $dollarCase;
var dollar$case$;
var _underScore;

var firstVar;

var var;
var variable;

var UppercaseCamel;
var SUPERUPPERCASE;

/*
  JAVASCRIPT OBJECTS
    Number
    String
    Boolean
    Float
    Array
    Object
*/
var myNumberObject = 3;

var myNewNumberObject = myNumberObject.toString();

// console.log(myNumberObject);
// console.log(myNewNumberObject);

// STRING OBJECT
var myStringObject = "This is a string object";
var myOtherStringObject = 'This is also a string object';
// var myNonWorkingStringObject = 'This wont work";

console.log(myStringObject, myOtherStringObject);

// BOOLEAN OBJECT
var myBooleanTrue = false; // 0
var myBooleanFalse = true; // 1

// FLOAT OBJECT
var myFloatObject = 3.1;

// ARRAY OBJECT
var myArrayObject = ['red', 8, true, ['r', 'b', 'g']];
// console.log(myArrayObject[3]);

// OBJECT OBJECT
var myObjectObject = {
  make: 'jeep',
  model: 'wrangler',
  color: 'black',
  year: 2014,
  package: function(){
    alert(this.make);
  }
};
// console.log(myObjectObject);

// JAVASCRIPT MATH

var a = 5;
var b = 10;

var c = (a + b);
// console.log(c);

var s = (a - b);
var m = (a * b);
var d = (a / b);
console.log(s, m, d);
// console.log(s);
// console.log(m);
// console.log(d);

var g = b % a;
console.log(g);
