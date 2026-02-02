// ----task-1----//

const numbers = [1, 2, 3, 4, 5];
const multipliedNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  multipliedNumbers.push(numbers[i] * 3);
}
console.log(multipliedNumbers); 

// ----task-2----//
const numbers2 = [12, 5, 8, 130, 44];
const filteredNumbers = numbers2.filter(num => num > 10);
console.log(filteredNumbers);

// ----task-3----//
const fruits = ["apple", "banana", "mango"];
fruits.forEach(fruit => console.log(`Fruit: ${fruit}`));

// ----task-4----//
const users = [
  { name: "Ali", age: 22 },
  { name: "Sara", age: 18 },
  { name: "Ahmed", age: 25 },
];

const names = users.map(user => user.name);
console.log(names);

// ----task-5----//
const users2 = [
  { name: "Ali", age: 17 },
  { name: "Sara", age: 18 },
  { name: "Ahmed", age: 25 }
];

const adults = [];
for (let i = 0; i < users2.length; i++) {
  if (users2[i].age >= 18) {
    adults.push(users2[i]);
  }
}
console.log(adults);

// ----task-6----//
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Tablet" }
];

const foundProduct = products.find(product => product.id === 2);

console.log(foundProduct);


// ----task-7----//
const scores = [70, 85, 90, 60];
const allAbove50 = scores.every(score => score > 50);
console.log(allAbove50); 


// ----task-8----//
const emails = ["test@gmail.com", "hello@yahoo.com", "admin@gmail.com"];
const hasGmail = emails.some(email => email.includes("@gmail.com"));
console.log(hasGmail); 