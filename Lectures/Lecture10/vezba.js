class Person {
    constructor(firstName, lastName, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
    }

}

class Student extends Person {
    constructor(firstName, lastName, gender, school) {
        super(firstName, lastName, gender);
        this.school = school;
    }
    cal() {
        console.log(`${this.firstName} ${this.lastName} has grade point`);
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, gender, subject) {
        super(firstName, lastName, gender);
        this.subject = subject;
    }
}

const  student = new Student ('John', 'Hopkins', 'male', 'Koco Racin');
console.log(student);

const teacher = new Teacher ('Bojana', 'Cvetkovska', 'female', 'Matematika');
console.log(teacher);

student.cal();