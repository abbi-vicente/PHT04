// Functions
// 1. function declaration
function greet() {
  console.log("Hello, welcome to functions!");
}
greet();

function squareDeclaration(num) {
  return num * num;
}

console.log("Square for Function Declaration", squareDeclaration(6));

// function functionName(parameter) {
// code goes here
// }
// functionName(argument)

// 2. Function expression
const squareExpression = function (num) {
  return num * num;
};

console.log("Square for Function Expression", squareExpression(5));

// Function Hoisting - only works for function declaration
sayHello();

function sayHello() {
  console.log("Hello function hoisting");
}
