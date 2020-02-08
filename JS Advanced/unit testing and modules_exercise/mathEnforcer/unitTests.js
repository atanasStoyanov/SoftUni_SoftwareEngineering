let assert = require('chai').assert;
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