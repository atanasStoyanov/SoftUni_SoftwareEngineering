class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }

        if (this.kids.hasOwnProperty(grade)) {

            if (this.kids[grade].includes(`${name}-${budget}`)) {
                return `${name} is already in the list for this ${this.destination} vacation.`;
            } else {
                this.kids[grade].push(`${name}-${budget}`);
                return this.kids[grade];
            }
        } else {
            this.kids[grade] = []
            this.kids[grade].push(`${name}-${budget}`);
            return this.kids[grade];
        }
    }

    removeChild(name, grade) {
        if (this.kids.hasOwnProperty(grade)) {
            let kid = this.kids[grade].find(k => k.includes(name));

            if (kid) {
                this.kids[grade] = this.kids[grade].filter(k => k.includes(name) === false);
                return this.kids[grade];
            } else {
                return `We couldn't find ${name} in ${grade} grade.`;
            }
        } else {
            return `We couldn't find ${name} in ${grade} grade.`
        }
    }

    toString() {
        let result = '';

        if (this.numberOfChildren === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }

        result = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;

        Object.keys(this.kids)
            .sort((a, b) => a - b)
            .map(grade => {
                result += `Grade: ${grade}\n`;
                this.kids[grade]
                    .map((kid, i) => result += `${i + 1}. ${kid}\n`);
            });
        return result;
    }

    get numberOfChildren() {
        return Object.values(this.kids).reduce((agr, e) => agr += e.length, 0);
    }
}


let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);
vacation.registerChild('Gosho', 5, 3000);
vacation.registerChild('Lilly', 6, 1500);
vacation.registerChild('Pesho', 7, 4000);
vacation.registerChild('Tanya', 5, 5000);
vacation.registerChild('Mitko', 10, 5500)
console.log(vacation.toString());


