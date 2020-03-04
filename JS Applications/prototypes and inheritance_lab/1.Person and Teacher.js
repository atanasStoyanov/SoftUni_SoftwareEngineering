function solve() {

    class Person {
        constructor(n, m){
            this.name = n;
            this.email = m;
        }
    }

    class Teacher extends Person {
        constructor(n, m, s) {
            super(n, m);
            this.subject = s;
        }
    }

    return {
        Person,
        Teacher
    }
}