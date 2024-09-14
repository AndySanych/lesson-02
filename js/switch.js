// switch(value) — what needs to be compared, and a set of individual cases case value — what it is compared to. The strict equality operator === is used for comparison. That means you cannot compare greater or less than, only equality
let cost;
const subscription = "premium";

switch (subscription) {
  case "free":
    cost = 0;
    break;

  case "pro":
    cost = 100;
    break;

  case "premium":
    cost = 500;
    break;

  default:
    console.log("Invalid subscription type");
}

console.log(cost); // 500

// The break statement at the end of each case block is necessary to stop further checks and immediately proceed to the code after the switch if the equality check returned true
// If the break statement is missing, after any case condition is met, all subsequent blocks of code will be executed one after another, which can lead to undesirable results if used incorrectly