function solve() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units
        }

        allUnits = { m: 0.01, cm: 1, mm: 10 };

        getCorrectValue(value) {
            return value * this.allUnits[this.units];
        }

        changeUnits(units) {
            this.units = units;
        }

        get area() {
            return NaN;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area}`;
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this.radius = radius;
        }


        get area() {
            return Math.PI * Math.pow(this.getCorrectValue(this.radius), 2);
        }

        toString() {
            return `${super.toString()} - radius: ${this.getCorrectValue(this.radius)}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.getCorrectValue(this.width) * this.getCorrectValue(this.height);
        }

        toString() {
            return `${super.toString()} - width: ${this.getCorrectValue(this.width)}, height: ${this.getCorrectValue(this.height)}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

let Circle = solve().Circle;
let Rectangle = solve.Rectangle;

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5
