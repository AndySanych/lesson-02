// Branching is used to execute different code depending on a condition. The principle is simple — the result of the condition is converted to a boolean (true or false), after which the program flow is directed to one branch or another

//The if statement
let cost = 0;
// const subscription = "pro";
const subscription = "free";

if (subscription === "pro") {
  cost = 100;
}
// If the condition evaluates to true, the code inside the curly braces of the if statement is executed
// console.log(cost); // 100

// If the condition evaluates to false, the code inside the curly braces will be skipped
console.log(cost); // 0

// The if...else statement - Extends the if syntax so that if the condition evaluates to false, the code inside the curly braces after the else statement will be executed
let price;
const membershipLevel = "free";

if (membershipLevel === "pro") {
  price = 100;
} else {
  price = 0;
}
console.log(price); // 0

// If the condition evaluates to true, the body of the else block is ignored
let fee;
const userPlan = "pro";

if (userPlan === "pro") {
  fee = 100;
} else {
  fee = 0;
}

console.log(fee); // 100

// The else...if statement - The else...if block allows you to add another if statement with a condition after else. At the end of the chain, there can be a standard else block, which will only execute if none of the conditions evaluate to true
let totalAmount;
const accountType = "premium";

if (accountType === "free") {
  totalAmount = 0;
} else if (accountType === "pro") {
  totalAmount = 10;
} else if (accountType === "premium") {
  totalAmount = 500;
} else {
  console.log("Invalid totalAmount type");
}

console.log(totalAmount); // 500

// At the first true condition, the checks stop, and only one scenario corresponding to this true will be executed. Therefore, this can be interpreted as: looking for the first matching condition and ignoring everything else
