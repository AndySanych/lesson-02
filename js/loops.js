// while loop - A precondition loop is a loop that runs as long as a specified condition is true, which is checked before the loop body executes. The loop body may not run at all if the condition is false from the beginning

// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

// let clientCuonter = 18;
// const maxClients = 25;

// while (clientCuonter < maxClients) {
//   console.log("Client: ", clientCuonter);
//   clientCuonter += 1;
// }

// do...while loop - A postcondition loop is a loop where the condition is checked after the loop body is executed. This means the loop body will always run at least once
// let password = "";

// do {
//   password = prompt("password 4-x", "");
// } while (password.length < 5);

// console.log("Password: ", password);

// for loop - A counter loop is a loop where a variable changes its value from a starting point to an end point with a certain step. For each value of this variable, the loop body runs once. In most programming languages, it's done using a for loop, where the counter, the number of iterations, and the step are specified.
// Counter variables are traditionally named with the letters i, j, and k
for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}

const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += i;
}

console.log(sum);

// Let's recall the operation a % b and output the remainder of division using a loop
const max = 10;

for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}

// break statement
//Let's find the number 3. Once the if condition is met, the loop will stop (break)
for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log("Found the number 3, breaking the loop execution");
    break;
  }
}

console.log("Log after the loop");

// continue statement
// The continue statement doesn't stop the whole loop, just the current iteration. It is used when there is nothing more to do in the current loop iteration and it's time to move to the next one

// We use a loop to output only odd numbers. For even i, continue is triggered, skipping the loop body, and control moves to the next iteration
const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }
  console.log("Odd i: ", i);
}
