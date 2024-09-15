// Variable scope is the accessibility of variables in a certain part of the code

const value = 5;

if (true) {
  console.log("Block scope: ", value); // Block scope:  5
}

console.log("Global scope: ", value); // Global scope:  5

if (true) {
  const scope = 5;
  console.log("Block scope: ", scope); // Block scope:  5
}

// console.log("Global scope: ", scope); // ReferenceError: scope is not defined


// The global scope is already present, let's create a variable global within it
const global = "global";

// Then, using the if statement, we'll create a block scope block A
if (true) {
  const blockA = "blockA";

  //We see the global scope + local scope A
  console.log(global); // global
  console.log(blockA); // blockA

  // Variables blockB and blockC were not found in the available scopes. A reference error will occur when trying to access these variables
  // console.log(blockB); // ReferenceError: blockB is not defined
  // console.log(blockC); // ReferenceError: blockB is not defined

  // Inside the block A scope, we'll place another if statement, which will create a nested scope block B
  if (true) {
    const blockB = "blockB";

    // We see the global scope + outer scope A + local scope B
    console.log(global); // globl
    console.log(blockA); // blockA
    console.log(blockB); // blockB

    // The variable blockC was not found in the available scopes. A reference error will occur when trying to access the variable
    // console.log(blockC); // ReferenceError: blockC is not defined
  }
}


// At the same level as block A, we'll create a block C scope, also using the if statement
if (true) {
  const blockC = "blockC";

  // We see the global scope + local scope C
  console.log(global); // global
  console.log(blockC); // blockC

  // Variables blockA and blockB were not found in the available scopes. A reference error will occur when trying to access these variables
  // console.log(blockA); // ReferenceError: blockA is not defined
  // console.log(blockB); // ReferenceError: blockB is not defined
}

// We see only the global scope
console.log(global); // global

// Variables blockA, blockB, and blockC were not found in the available scopes. A reference error will occur when trying to access these variables
// console.log(blockA); // ReferenceError: blockA is not defined
// console.log(blockB); // ReferenceError: blockB is not defined
// console.log(blockC); // ReferenceError: blockC is not defined
