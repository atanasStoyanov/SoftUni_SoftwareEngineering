let assert = require('chai').assert;
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