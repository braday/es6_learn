// function Person(firstName, lastName) {
//   this.firstname = firstName;
//   this.lastName = lastName;
// }


// // Greeting 
// Person.prototype.greeting = function(){
//   return `Hi there ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('Jon', 'Snow');

// console.log(person1.greeting());

// // Customer Constructor
// function Customer(firstName, lastName, phone, membership) {
  
//   // Inheritance, fname/lname are inherite from other
//   Person.call(this, firstName, lastName);

//   this.phone = phone;
//   this.membership = membership;
// }

// // Inherit the Person prototype methods
// Customer.prototype = Object.create(Person.prototype);


// const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Std');

// console.log(customer1);

// // Make Customer.prototype return Customer constructor
// Customer.prototype.greeting = function () {
//   return `Hi there ${this.firstName} ${this.lastName} welcome to hell`;
// }


// console.log(customer1.greeting());

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

// console.log(john.greeting());

console.log(john.getMembershipCost());
// console.log(Customer.getMembershipCost());