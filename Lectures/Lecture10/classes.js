class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get firstName() {
        return `${this._firstName}`;
    }

    get lastName() {
        return `${this._lastName}`;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }
    // Ova e samo metoda
    sayHi() {
        return `Hi ${this.firstName} ${this.lastName} there`;
    }
}

const person = new Person('Kurt', 'Cobain');
console.log(person);
console.log(person.firstName);
console.log(person.lastName);












