function solve() {

    function computerQualityMixin(classToExtend) {

        classToExtend.prototype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        }

        classToExtend.prototype.isFast = function () {
            return this.processorSpeed > (this.ram / 4);
        }

        classToExtend.prototype.isRoomy = function () {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed);
        }
    }

    function styleMixin(classToExtend) {

        classToExtend.prototype.isFullSet = function () {
            if (this.manufacturer === this.keyboard.manufacturer && this.manufacturer === this.monitor.manufacturer) {
                return true;
            } else {
                return false;
            }
        }

        classToExtend.prototype.isClassy = function () {
            if (this.battery.expectedLife >= 3 && (this.color === 'Black' || this.color === 'Silver') && this.weight < 3) {
                return true;
            } else {
                return false;
            }
        }
    }

    return {
        computerQualityMixin,
        styleMixin
    }

}

let computerSolution = require('./6.Computer');
let classes = computerSolution();

let mixins = solve();
let computerQualityMixin = mixins.computerQualityMixin;
let styleMixin = mixins.styleMixin;

computerQualityMixin(classes.Desktop);
styleMixin(classes.Desktop);
computerQualityMixin(classes.Laptop);
styleMixin(classes.Laptop);

let keyboard = new classes.Keyboard('Logitech',70);
let keyboard2 = new classes.Keyboard('A-4',70);
let monitor = new classes.Monitor('Logitech',28,18);
let battery = new classes.Battery('Energy',3);
let laptop = new classes.Laptop("Hewlett Packard",2.4,4,0.5,2.99,"Silver",battery);
let laptop2 = new classes.Laptop("Hewlett Packard",2.4,4,12,3.12,"Silver",battery);
let desktop = new classes.Desktop("Logitech",3.3,8,1,keyboard,monitor);
let desktop2 = new classes.Desktop("Logitech",1.3,8,10,keyboard2,monitor);

console.log(laptop)