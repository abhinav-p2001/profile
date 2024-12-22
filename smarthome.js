// Base User class
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getDetails() {
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }
}

// Student class inheriting from User
class Student extends User {
    constructor(name, email, studentId) {
        super(name, email);
        this.studentId = studentId;
    }

    enroll() {
        console.log(`Student ${this.name} has enrolled.`);
    }
}

// Instructor class inheriting from User
class Instructor extends User {
    constructor(name, email, instructorId) {
        super(name, email);
        this.instructorId = instructorId;
    }

    assignGrade() {
        console.log(`Instructor ${this.name} assigned a grade.`);
    }
}

// Demonstration
const student1 = new Student('Alice', 'alice@example.com', 'S12345');
student1.getDetails(); // Output: Name: Alice, Email: alice@example.com
student1.enroll();     // Output: Student Alice has enrolled.

const instructor1 = new Instructor('Bob', 'bob@example.com', 'I67890');
instructor1.getDetails(); // Output: Name: Bob, Email: bob@example.com
instructor1.assignGrade(); // Output: Instructor Bob assigned a grade.
