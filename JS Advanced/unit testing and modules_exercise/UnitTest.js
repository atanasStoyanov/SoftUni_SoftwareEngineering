let assert = require('chai').assert;

//problem 2. Even or Odd

let isOddOrEven = require('./evenOrOdd');

describe('evenOrOdd() behavior', () => {

    it('should return undefined for evenOrOdd(1)', () => {
        let actulaResult = isOddOrEven(1);

        assert.isUndefined(actulaResult, 'The result should be undefined');
    });

    it('should return undefined for evenOrOdd({obj}', () => {
        let actulaResult = isOddOrEven({'cat': 'Pesho'});
        assert.isUndefined(actulaResult, 'The result should be undefined');
    });

    it('should return even', () => {
        let actulaResult = isOddOrEven('even');
        let expectedResult = 'even';
        assert.equal(actulaResult, expectedResult, 'The result should be even');
    });

    it('should return odd', () => {
        let actulaResult = isOddOrEven('odd');
        let expectedResult = 'odd';
        assert.equal(actulaResult, expectedResult, 'The result should be odd');
    });

});

// problem 3. Char lookup

let lookupChar = require('./charLookup');

describe('lookupChar() behavior', () => {

    it('should return undefined with first param number', () => {
        let actulaResult = lookupChar(1, 1);
        assert.isUndefined(actulaResult, 'The result should be undefined');
    });

    it('should return undefined with second param string', () => {
        let actulaResult = lookupChar('string', 'invalidIndex');
        assert.isUndefined(actulaResult, 'The result should be undefined');
    });

    it('should return Incorrect index with negative index', () => {
        let actulaResult = lookupChar('string', -1);
        let expectedResult = 'Incorrect index';
        assert.equal(actulaResult, expectedResult, 'The result should be Incorrect index');
    });

    it('should return Incorrect index with index bigger than length', () => {
        let actulaResult = lookupChar('string', 50);
        let expectedResult = 'Incorrect index';
        assert.equal(actulaResult, expectedResult, 'The result should be Incorrect index');
    });

    it('should return Incorrect index with index same as length', () => {
        let actulaResult = lookupChar('string', 6);
        let expectedResult = 'Incorrect index';
        assert.equal(actulaResult, expectedResult, 'The result should be Incorrect index');
    })

    it('should return undefined with floating point index', () => {
        let actulaResult = lookupChar('string', 2.5);
        assert.isUndefined(actulaResult, 'The result should be undefined');
    })

    it('should return s with index 0', () => {
        let actulaResult = lookupChar('string', 0);
        let expectedResult = 's';
        assert.equal(actulaResult, expectedResult, 'The result should be s');
    });

    it('should return t with index 1', () => {
        let actulaResult = lookupChar('string', 1);
        let expectedResult = 't';
        assert.equal(actulaResult, expectedResult, 'The result should be t');
    });

});

// Problem 4. Math Enforcer

let mathEnforcer = require('./mathEnforcer');

describe('mathEnforcer() behavior', () => {

    describe('addFive() behavior', () => {

        it('should return 10 with param 5', () => {
            let actulaResult = mathEnforcer.addFive(5);
            let expectedResult = 10;
            assert.equal(actulaResult, expectedResult, 'The result should be 10');
        });

        it('should return undefined with param string', () => {
            let actulaResult = mathEnforcer.addFive('string');
            assert.isUndefined(actulaResult, 'The result should be undefined');
        });

        it('should return 10.5 with floating point param 5.5.', () => {
            let actulaResult = mathEnforcer.addFive(5.5);
            let expectedResult = 10.5;
            assert.equal(actulaResult, expectedResult, 'The result should be 10.5');
        });

        it('should return 3 with negativ param -2', () => {
            let actulaResult = mathEnforcer.addFive(-2);
            let expectedResult = 3;
            assert.equal(actulaResult, expectedResult, 'The result should be 3');
        });
    });

    describe('subtractTen() behavior', () => {

        it('should return 10 with param 20', () => {
            let actulaResult = mathEnforcer.subtractTen(20);
            let expectedResult = 10;
            assert.equal(actulaResult, expectedResult, 'The result should be 10');
        });

        it('should return undefined with param string', () => {
            let actulaResult = mathEnforcer.subtractTen('string');
            assert.isUndefined(actulaResult, 'The result should be undefined');
        });

        it('should return 10.5 with floating point param 20.5', () => {
            let actulaResult = mathEnforcer.subtractTen(20.5);
            let expectedResult = 20.5 - 10;
            assert.equal(actulaResult, expectedResult, 'The result should be 10.5');
        });

        it('should return -20 with negative param -10', () => {
            let actulaResult = mathEnforcer.subtractTen(-10);
            let expectedResult = -20;
            assert.equal(actulaResult, expectedResult, 'The result should be 20');
        });


    });

    describe('sum() behavior', () => {

        it('should retunr 10 with prams 5 and 5', () => {
            let actulaResult = mathEnforcer.sum(5, 5);
            let expectedResult = 10;
            assert.equal(actulaResult, expectedResult, 'The result should be 10');
        })

        it('should return undefined with first param string', () => {
            let actulaResult = mathEnforcer.sum('string', 1);
            assert.isUndefined(actulaResult, 'The result should be undefined');
        });

        it('should return undefined with second param string', () => {
            let actulaResult = mathEnforcer.sum(1, 'string');
            assert.isUndefined(actulaResult, 'The result should be undefined');
        });

        it('should return 10.5 with floating point params', () => {
            let actulaResult = mathEnforcer.sum(5.2, 5.3);
            let expectedResult = 5.2 + 5.3;
            assert.equal(actulaResult, expectedResult, 'The result should be 10.5');
        });

    });

});

// Problem 6 String Builder

let StringBuilder = require('./stringBuilder');

describe('StringBuilder Class behavior', () => {

    describe('constructor behavior', () => {

        it('should create property _stringArray', () => {
            let str = new StringBuilder('1234');
            let actulaResult = str.hasOwnProperty('_stringArray');
            let expectedResult = true;

            assert.equal(actulaResult, expectedResult, 'The result should be true');
        });

        it('should return empty string', () => {
            let str = new StringBuilder();
            let actulaResult = str.hasOwnProperty('_stringArray');
            let expectedResult = true;
            assert.equal(actulaResult, expectedResult, 'The result should be true');
        });
    });

    describe('append() behavior', () => {
        let str;

        beforeEach(function () {
            str = new StringBuilder('test');
        })

        it('check if append() exists', () => {
            assert.isFunction(StringBuilder.prototype.append, 'The result should be true');
        })

        it('should return testtest', () => {
            str.append('test');
            let actulaResult = str.toString();
            let expectedResult = 'testtest';
            assert.equal(actulaResult, expectedResult, 'The resulst should be testtest');
        });

        it('test with invalid param', () => {
            assert.throw(() => str.append(1), 'Argument must be string');
        });
    });

    describe('prepend() behavior', () => {
        let str;

        beforeEach(function () {
            str = new StringBuilder('test');
        });

        it('check if prepend exists', () => {
            assert.isFunction(StringBuilder.prototype.prepend, 'The result should be true');
        });

        it('should return strtest', () => {
            str.prepend('str');
            let actulaResult = str.toString();
            let expectedResult = 'strtest';
            assert.equal(actulaResult, expectedResult, 'The result should be strtest');
        });

        it('test with invalid param', () => {
            assert.throw(() => str.prepend(1), 'Argument must be string');
        });
    });

    describe('insertAt() behavior', () => {
        let str;

        beforeEach(function () {
            str = new StringBuilder('abc');
        });

        it('check if insertAt() exists', () => {
            assert.isFunction(StringBuilder.prototype.insertAt, 'The result should be true');
        })
        it('should return adbc', () => {
            str.insertAt('d', 1);
            let actulaResult = str.toString();
            let expectedResult = 'adbc';
            assert.equal(actulaResult, expectedResult, 'The resulst should be adbc');
        });

        it('test with invalid param', () => {
            assert.throw(() => str.insertAt(1, 1), 'Argument must be string');
        })

        it('test if string is inserdet at corect index', () => {
            str.insertAt('d', 1);
            let actulaResult = str.toString()[1];
            let expectedResult = 'd';
            assert.equal(actulaResult, expectedResult, 'The result should be d');
        });

    });

    describe('remove() behavior', () => {
        let str;

        beforeEach(function() {
            str = new StringBuilder('abc');
        });

        it('check if remove() exists', () => {
            assert.isFunction(StringBuilder.prototype.remove, 'The result should be true');
        })
        it('should return bc', () => {
            str.remove(0, 1);
            let actulaResult = str.toString();
            let expectedResult = 'bc';
            assert.equal(actulaResult, expectedResult, 'The result should be bc');
        });
    });

    describe('full class test', () => {
        it ('should return User,w hello, there', () => {
            let str = new StringBuilder('hello');
            str.append(', there');
            str.prepend('User, ');
            str.insertAt('woop', 5);
            str.remove(6, 3)
            let actulaResult = str.toString();
            let expectedResult = 'User,w hello, there';
            assert.equal(actulaResult, expectedResult, 'The result should be User,w hello, there');
        });

        it('StringBuilder type', () => {
            let actulaResult = typeof StringBuilder;
            let expectedResult = 'function';
            assert.equal(actulaResult, expectedResult, 'The result should be function');
        });
    });
});