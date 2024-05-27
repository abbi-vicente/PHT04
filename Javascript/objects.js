// object literals
const person = {
  // key-value
  firstName: "John",
  lastName: "Doe",
  age: 25,
  hobbies: ["reading", "coding", "sleeping"],

  // add a method
  greet: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}. Nice to meet you`);
  },
};

console.log(person);

// accessing object properties
console.log(person.firstName);
console.log(person.age);

// access the object method
person.greet();

// add new properties
person.nationality = "American";
console.log(person.nationality);

// add new methods
person.introduce = function () {
  console.log(`I am ${this.firstName}. I am ${this.age} years old`);
};
person.introduce();

// nesting objects
const address = {
  street: "123 Main St",
  city: "New York",
  country: "USA",
};

person.address = address;
console.log(person.address.street);

// destructuring
const { firstName, lastName, age } = person;
console.log(firstName);
