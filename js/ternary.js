// Ternary operator
/*
Works according to the following scheme:

1. The condition is evaluated.
2. If the condition is true, the expression after ? is evaluated.
3. If the condition is false, the expression after : is evaluated.
4. The value of the evaluated expression is returned as the result of the ternary operator.
*/

let type;
const age = 20;

if (age > 18) {
  type = "about";
} else {
  type = "child";
}

console.log(type); // about

// Let's refactor by replacing if...else with the ternary operator
const typeData = 17;
const ageUser = typeData >= 18 ? "about" : "child";
console.log(ageUser); // child

// Let's write an operation to find the larger number
const num1 = 5;
const num2 = 10;
let biggerNumber;

if (num1 > num2) {
  biggerNumber = num1;
} else {
  biggerNumber = num2;
}

console.log(biggerNumber); // 10

// Let's refactor by replacing if...else with the ternary operator
const numFirst = 15;
const numSecondary = 10;

const maxNumber = numFirst > numSecondary ? numFirst : numSecondary;

console.log(maxNumber); // 15

// The ternary operator should be used in simple assignment or return operations. Using it to describe complex branching is considered bad practice (anti-pattern)!!!