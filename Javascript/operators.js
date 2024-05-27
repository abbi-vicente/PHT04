// JS Operators - symbols or keywords to perform operations
// JS Expressions

// Arithmetic Operators and Expressions
let a = 10;
let b = 5;

// Addition
// a = a + b;
// console.log(a);

// compound assignment operator
a += b; // a = a + b;
console.log(a);

// Subtraction: a = a - b
a -= b;
console.log(a);

// Multiplication: a = a * b
a *= b;
console.log(a);

// Division: a = a / b
a /= b;
console.log(a);

// Modulo: a = a % b
a %= b; // a = 10 / b =5 => a = 0
console.log(a);

// concatenation
console.log("Hello" + " " + "World" + " " + a + " " + b);

// Comparison Operators
let x = 10;
let y = 5;

console.log(x > y); // greater than
console.log(x < y); // less than
console.log(x >= y); // greater than or equal to
console.log(x <= y); // less than or equal to
console.log(x == y); //equal
console.log(x != y); //not equal

// Type Coercion
console.log(50 == "50"); //true, loose equality
console.log(50 === "50"); //false, strict equality

// Logical Operators
let sunny = true;
let warm = false;

// AND - &&
console.log("Sunny AND warm: ", sunny && warm);

// OR - ||
console.log("Sunny OR warm: ", sunny || warm);

// NOT = !
console.log("Not sunny: ", !sunny);

// Unary operators (++, --)
let num = 1;
num++; //+1 to num
console.log(num);

num--; // -1 num
console.log(num);

// Ternary operator - (condition ? result : else)
let activeStatus = true;
let member = activeStatus ? "Registered" : "Not registered";
console.log(member);

// typeof operator - typeof()
console.log(typeof activeStatus);
console.log(typeof member);
