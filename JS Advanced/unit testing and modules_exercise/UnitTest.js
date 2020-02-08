let assert = require('chai').assert;

//problem 2. Even or Odd

// let isOddOrEven = require('./evenOrOdd');

// describe('evenOrOdd() behavior', () => {

//     it('should return undefined for evenOrOdd(1)', () => {
//         let actulaResult = isOddOrEven(1);

//         assert.isUndefined(actulaResult, 'The result should be undefined');
//     });

//     it('should return undefined for evenOrOdd({obj}', () => {
//         let actulaResult = isOddOrEven({'cat': 'Pesho'});
//         assert.isUndefined(actulaResult, 'The result should be undefined');
//     });

//     it('should return even', () => {
//         let actulaResult = isOddOrEven('even');
//         let expectedResult = 'even';
//         assert.equal(actulaResult, expectedResult, 'The result should be even');
//     });

//     it('should return odd', () => {
//         let actulaResult = isOddOrEven('odd');
//         let expectedResult = 'odd';
//         assert.equal(actulaResult, expectedResult, 'The result should be odd');
//     });

// });

//problem 3. Char lookup

// let lookupChar = require('./charLookup');

// describe('lookupChar() behavior', () => {

//     it('should return undefined with first param number', () => {
//         let actulaResult = lookupChar(1, 1);
//         assert.isUndefined(actulaResult, 'The result should be undefined');
//     });

//     it('should return undefined with second param string', () => {
//         let actulaResult = lookupChar('string', 'invalidIndex');
//         assert.isUndefined(actulaResult, 'The result should be undefined');
//     });

//     it('should return Incorrect index with negative index', () => {
//         let actulaResult = lookupChar('string', -1);
//         let expectedResult = 'Incorrect index';
//         assert.equal(actulaResult, expectedResult, 'The result should be Incorrect index');
//     });

//     it('should return Incorrect index with index bigger than length', () => {
//         let actulaResult = lookupChar('string', 50);
//         let expectedResult = 'Incorrect index';
//         assert.equal(actulaResult, expectedResult, 'The result should be Incorrect index');
//     });

//     it('should return Incorrect index with index same as length', () => {
//         let actulaResult = lookupChar('string', 6);
//         let expectedResult = 'Incorrect index';
//         assert.equal(actulaResult, expectedResult, 'The result should be Incorrect index');
//     })

//     it('should return undefined with floating point index', () => {
//         let actulaResult = lookupChar('string', 2.5);
//         assert.isUndefined(actulaResult, 'The result should be undefined');
//     })

//     it('should return s with index 0', () => {
//         let actulaResult = lookupChar('string', 0);
//         let expectedResult = 's';
//         assert.equal(actulaResult, expectedResult, 'The result should be s');
//     });

//     it('should return t with index 1', () => {
//         let actulaResult = lookupChar('string', 1);
//         let expectedResult = 't';
//         assert.equal(actulaResult, expectedResult, 'The result should be t');
//     });

// });

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