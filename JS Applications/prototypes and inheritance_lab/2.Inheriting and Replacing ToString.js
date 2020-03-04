function solve() {

    class Person {
        constructor(n, m){
            this.name = n;
            this.email = m;
        }

        toString() {
            return `Person (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(n, m, s) {
            super(n, m);
            this.subject = s;
        }

        toString() {
            return super.toString().replace('Person', 'Teacher').replace(')', '') + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(n, m, c) {
            super(n, m);
            this.course = c;
        }

        toString() {
            return super.toString().replace('Person', 'Student').replace(')', '') + `, course: ${this.course})`;
        }
    }
    return {
        Person,
        Teacher,
        Student
    }
}

let classes = solve();
let Teacher = classes.Teacher;
let t = new Teacher("Gosho",'gosh@gosh.com',"Graphics");
console.log(t.toString())