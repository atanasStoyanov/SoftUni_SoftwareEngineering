let sum = require('./sumOfNumbers');
let assert = require('chai').assert;

describe('sum() behavior', () => {

    it('check result with valid data', () => {
        let actualResult = sum([5, 5]);
        let expectedResult = 10;

        assert.equal(actualResult, expectedResult, 'The result should be 10');
    });

    it('check result with one element', () => {
        let actualResult = sum([1]);
        let expectedResult = 1;

        assert.equal(actualResult, expectedResult, 'The result should be 1');
    });

    it('check result with empty array', () => {
        let actualResult = sum([]);
        let expectedResult = 0;

        assert.equal(actualResult, expectedResult, 'The result should be 0');
    })

    it ('check result with floating point and negative numbers', () => {
        let actualResult = sum([1.5, 1.5, -1]);
        let expectedResult = 2;

        assert.equal(actualResult, expectedResult, 'The result should be 2');
    })

})