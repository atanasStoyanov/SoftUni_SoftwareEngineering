class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(value) {
        let pattern = /^[0-9]{6}$/gm;

        if (pattern.test(value) === false) {
            throw TypeError('Client ID must be a 6-digit number');
        }

        this._clientId = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        let pattern = /^[a-zA-Z0-9_\.]+@[a-zA-Z\.]+$/gm;

        if (pattern.test(value) === false) {
            throw TypeError('Invalid e-mail');
        }

        this._email = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this.checkName(value, 'First');
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this.checkName(value, 'Last');
        this._lastName = value;
    }

    checkName(value, nameType) {
        let pattern = /^[A-Za-z]+$/gm;

        if (value.length < 3 || value.length > 20) {
            throw TypeError(`${nameType} name must be between 3 and 20 characters long`);
        } else if (pattern.test(value) === false) {
            throw TypeError(`${nameType} name must contain only Latin characters`);
        }

    }
}

let acc = new CheckingAccount('131423', 'ivan@some.com', 'Ivan', 'Petrov')
console.log(acc);
