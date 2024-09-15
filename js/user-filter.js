// 1. Create an array of user objects with the properties: name (name), age (age), and address (which contains fields: street, house number, city, and postal code). You should create at least 10 different virtual users.
const users = [
  {
    name: "John Doe",
    age: 28,
    address: {
      street: "Main St",
      houseNumber: "101", // The house number is stored as a string to preserve its exact format, including possible letters and symbols
      city: "New York",
      postalCode: "10001", // The postal code is stored as a string to preserve its exact format, including possible leading zeros and symbols
    },
  },
  {
    name: "Jane Smith",
    age: 34,
    address: {
      street: "Oak Ave",
      houseNumber: "235/2",
      city: "Los Angeles",
      postalCode: "90012",
    },
  },
  {
    name: "Michael Johnson",
    age: 40,
    address: {
      street: "Pine Rd",
      houseNumber: "45-B",
      city: "Chicago",
      postalCode: "60614",
    },
  },
  {
    name: "Emily Davis",
    age: 22,
    address: {
      street: "Maple St",
      houseNumber: "78",
      city: "San Francisco",
      postalCode: "00277",
    },
  },
  {
    name: "William Brown",
    age: 29,
    address: {
      street: "Elm St",
      houseNumber: "56/2",
      city: "Houston",
      postalCode: "30217",
    },
  },
  {
    name: "Olivia Wilson",
    age: 25,
    address: {
      street: "Birch Ave",
      houseNumber: "32",
      city: "Phoenix",
      postalCode: "34677",
    },
  },
  {
    name: "James Taylor",
    age: 32,
    address: {
      street: "Cedar Ln",
      houseNumber: "123",
      city: "Philadelphia",
      postalCode: "00007",
    },
  },
  {
    name: "Sophia Martinez",
    age: 30,
    address: {
      street: "Walnut St",
      houseNumber: "88-A",
      city: "San Diego",
      postalCode: "92101",
    },
  },
  {
    name: "Daniel Anderson",
    age: 36,
    address: {
      street: "Chestnut Rd",
      houseNumber: "154",
      city: "Dallas",
      postalCode: "75201",
    },
  },
  {
    name: "Isabella Thomas",
    age: 43,
    address: {
      street: "Spruce St",
      houseNumber: "21",
      city: "Austin",
      postalCode: "73301",
    },
  },
];

console.log(users);

// 2. Filter the users to keep only those who are 30 years old or older
const filterUsers = [];

for (let i = 0; i < users.length; i += 1) {
  if (users[i].age >= 30) {
    filterUsers.push(users[i]);
  }
}

console.log(filterUsers);

// 3. Convert the filtered users to a new array of strings using template literals (ES6+ feature). The string format should be: "Name lives in City
const userStrings = [];

for (let i = 0; i < filterUsers.length; i += 1) {
  userStrings.push(
    `${filterUsers[i].name} lives in ${filterUsers[i].address.city}. Age: ${filterUsers[i].age}.`
  );
}

console.log(userStrings);

// 4. Log each string to the console. Each element in the new array should be output individually using console.log
for (let i = 0; i < userStrings.length; i += 1) {
  console.log(userStrings[i]);
}
