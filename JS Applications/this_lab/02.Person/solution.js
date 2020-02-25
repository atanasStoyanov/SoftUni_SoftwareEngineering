class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        return this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        return this._lastName = value
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        let names = value.split(' ');

        if (names.length === 2) {
            this.firstName = names[0];
            this.lastName = names[1];
        }

        return `${this.firstName} ${this.lastName}`;
    }
}





let person = new Person("Peter", "Ivanov");
console.log(person.fullName);//Peter Ivanov
person.firstName = "George";
console.log(person.fullName);//George Ivanov
person.lastName = "Peterson";
console.log(person.fullName);//George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName)//Nikola
console.log(person.lastName)//Tesla
