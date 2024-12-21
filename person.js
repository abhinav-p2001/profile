// Step 1: Create a constructor function Person with properties name and age
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Step 2: Add a method introduce to Person.prototype
  Person.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  };
  
  // Step 3: Create a constructor function Employee that inherits from Person
  function Employee(name, age, jobTitle) {
    Person.call(this, name, age);  // Inherit properties from Person
    this.jobTitle = jobTitle;
  }
  
  // Step 4: Ensure that Employee.prototype inherits from Person.prototype
  Employee.prototype = Object.create(Person.prototype);
  Employee.prototype.constructor = Employee;  // Restore the constructor reference to Employee
  
  // Step 5: Add a method work to Employee.prototype
  Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
  };
  
  // Step 6: Create an instance of Person
  const person1 = new Person("Alice", 30);
  
  // Step 7: Create an instance of Employee
  const employee1 = new Employee("Bob", 40, "Software Engineer");
  
  // Step 8: Call introduce on both instances
  person1.introduce();  // Logs: "Hi, my name is Alice and I am 30 years old."
  employee1.introduce();  // Logs: "Hi, my name is Bob and I am 40 years old."
  
  // Step 9: Call work on the Employee instance
  employee1.work();  // Logs: "Bob is working as a Software Engineer."
  