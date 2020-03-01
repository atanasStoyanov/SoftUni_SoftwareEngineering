(function () {
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return `${this}`;
        }
        return `${str}${this}`;
    }

    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return `${this}`;
        }
        return `${this}${str}`;
    }

    String.prototype.isEmpty = function () {
        return this.length === 0

    }

    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return `${this}`;
        }

        if (n < 4) {
            return '.'.repeat(n);
        }

        if (this.includes(' ')) {
            let splitted = this.split(' ');

            while ((splitted.join(' ') + '...').length > n) {
                splitted.pop();
            }

            return splitted.join(' ') + '...';

        } else {
            return `${this.substr(0, n - 3)}...`;
        }

    }

    String.format = function (string) {
        for (let i = 0; i < arguments.length; i++) {
            string = string.replace(`{${i - 1}}`, arguments[i]);
        }

        return string;
    }
}());

let str = 'my string';
console.log(str.isEmpty())
console.log(str = str.ensureStart('my'));
console.log(str = str.ensureStart('hello '));
console.log(str = str.truncate(16));
console.log(str = str.truncate(14));
console.log(str = str.truncate(8));
console.log(str = str.truncate(4));
console.log(str = str.truncate(2));
console.log(str = String.format('The {0} {1} fox', 'quick', 'brown'));
console.log(str = String.format('jumps {0} {1}', 'dog'));
