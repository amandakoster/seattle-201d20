'use strict';

var num = 1;

// function declaration
addFunc(param1, param2);
function addFunc(param1, param2){
  var num = 0;
  num++;
  var result = param1 + param2;
  return;
}
var theSum = addFunc(-2, 88, "ants");

// function expression
var anotherFunc = function () {
  // do a thing
};

// IIFE
(function(){
  // does some stuff
})();

// Function declaration
function myFunc(firstParam, secondParam, thirdParam){
  var result = [firstParam, secondParam, 88];
  var num = 1;
  num = num * 88;
  function multiplyNum(num1, num2){
    var anotherNum = 4;
  }
}
myFunc();
