class Library {
    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            normal: this.libraryName.length,
            special: this.libraryName.length * 2,
            vip: Number.MAX_SAFE_INTEGER
        }
    }

    subscribe(name, type) {
        if (type !== 'normal' && type !== 'special' && type !== 'vip') {
            throw new Error(`The type ${type} is invalid`);
        }

        let person = this.subscribers.find(p => p.name === name);

        if (person) {
            let index = this.subscribers.indexOf(person);
            this.subscribers[index].type = type;
            return this.subscribers[index];
        } else {
            person = {
                name,
                type,
                books: []
            }
            this.subscribers.push(person);
            return person;
        }
    }

    unsubscribe(name) {
        let person = this.subscribers.find(p => p.name === name);

        if (!person) {
            throw new Error(`There is no such subscriber as ${name}`);
        }

        this.subscribers = this.subscribers.filter(p => p.name !== name);

        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {
        let person = this.subscribers.find(p => p.name === subscriberName);

        if (!person) {
            throw new Error(`There is no such subscriber as ${subscriberName}`);
        }

        let type = person.type;
        let subTypeLimit = this.subscriptionTypes[type];

        if (person.books.length >= subTypeLimit) {
            throw new Error(`You have reached your subscription limit ${subTypeLimit}!`);
        }

        let index = this.subscribers.indexOf(person);
        this.subscribers[index].books.push({ title: bookTitle, author: bookAuthor });

        return this.subscribers[index];
    }

    showInfo() {
        if (this.subscribers.length === 0) {
            return `${this.libraryName} has no information about any subscribers`;
        }

        let output = '';

        this.subscribers.map(person => {
            output += `Subscriber: ${person.name}, Type: ${person.type}\n`;
            output += 'Received books: ';

            let subscriberBooks = []; 
            person.books.map(b => {
                subscriberBooks.push(`${b.title} by ${b.author}`); 
            });

            output += `${subscriberBooks.join(', ')}\n`;
        });

        return output;
    }
}

let lib = new Library('Lib');

lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');

lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');

console.log(lib.showInfo());
