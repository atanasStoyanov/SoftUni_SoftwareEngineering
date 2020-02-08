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