let assert = require('chai').assert;

// // problem 4. Sum of Numbers

let sum = require('./sumOfNumbers');

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
    });

    it ('check result with floating point and negative numbers', () => {
        let actualResult = sum([1.5, 1.5, -1]);
        let expectedResult = 2;

        assert.equal(actualResult, expectedResult, 'The result should be 2');
    });

});

// // Problem 5. Check for Symmetry

let isSymmetric = require('./checkForSymmetry');

describe('isSymmetric() behavior', () => {

    it('check result with valid data (array)', () => {
        let actualResult = isSymmetric([1, 2, 2, 1]);
        let expectedResult = true;

        assert.equal(actualResult, expectedResult, 'The result should be true');
    });

    it('check result with invalid data (string)', () => {
        let actualResult = isSymmetric('some string');
        let expectedResult = false;

        assert.equal(actualResult, expectedResult, 'The result should be false');
    });

    it('check result with invalid data (number)', () => {
        let actualResult = isSymmetric(5);
        let expectedResult = false;
        assert.equal(actualResult, expectedResult, 'The result should be false');
    });

    it('check result with non summetric array', () => {
        let actualResult = isSymmetric([1, 2, 3, 4]);
        let expectedResult = false;

        assert.equal(actualResult, expectedResult, 'The result should be false');
    });

    it('check result with single element in array', () => {
        let actualResult = isSymmetric([1]);
        let expectedResult = true;

        assert.equal(actualResult, expectedResult, 'The result should be true');
    });

    it('check result with different type of elements', () => {
        let actualResult = isSymmetric([1, 'string', { prop: 'val' }, { prop: 'val' }, 'string', 1]);
        let expectedResult = true;

        assert.equal(actualResult, expectedResult, 'The result should be true');
    });
});


// // Problem 6 RGB to Hex

let rgbToHexColor = require('./RGBToHex');

describe('rgbToHexColor() behavior', () => {

    describe('valid cases', () => {
        it('should return #C86432 for (200, 100, 50)', () => {
            let actualResult = rgbToHexColor(200, 100, 50);
            let expectedResult = '#C86432';

            assert.equal(actualResult, expectedResult, 'The result should be #C86432');
        });

        it('should return #FFFFFF for (0, 0, 0)', () => {
            let actualResult = rgbToHexColor(255, 255, 255);
            let expectedResult = '#FFFFFF';
            assert.equal(actualResult, expectedResult, 'The result should be #FFFFFF');
        });

        it('should return #000000 for (0, 0, 0)', () => {
            let actualResult = rgbToHexColor(0, 0, 0);
            let expectedResult = '#000000';
            assert.equal(actualResult, expectedResult, 'The result should be #000000');
        });
    });

    describe('invalid cases', () => {

        it('check with red bigger than range', () => {
            let actualResult = rgbToHexColor(400, 200, 200);
            let expectedResult = undefined;

            assert.equal(actualResult, expectedResult, 'The result should be undefined');
        });

        it('check with green bigger than range', () => {
            let actualResult = rgbToHexColor(200, 400, 200);
            let expectedResult = undefined;

            assert.equal(actualResult, expectedResult, 'The result should be undefined');
        });

        it('check with blue bigger than range', () => {
            let actualResult = rgbToHexColor(200, 200, 400);
            let expectedResult = undefined;

            assert.equal(actualResult, expectedResult, 'The result should be undefined');
        });

        it('check with floating point for red', () => {
            let actualResult = rgbToHexColor([200.5, 200, 200]);
            let expectedResult = undefined;

            assert.equal(actualResult, expectedResult, 'The result should be undefined');
        });

        it('check with floating point for green', () => {
            let actualResult = rgbToHexColor([200, 200.5, 200]);
            let expectedResult = undefined;

            assert.equal(actualResult, expectedResult, 'The result should be undefined');
        });

        it('check with floating point for blue', () => {
            let actualResult = rgbToHexColor([200, 200, 200.5]);
            let expectedResult = undefined;

            assert.equal(actualResult, expectedResult, 'The result should be undefined');
        });

        it('check with red smaller than range', () => {
            let actualResult = rgbToHexColor(-1, 200, 200);
            let expectedResult = undefined;
            assert.equal(actualResult, expectedResult, 'The result should be undefined');
        });
    });
});

// //problem 7. Add/Subtract;

let createCalculator = require('./add-subtract');

describe('createCalculator() behavior', () => {
    let calc;

    beforeEach(function () {
        calc = createCalculator();
    });

    it('should return 0 for get', () => {
        let actualResult = calc.get();
        let expectedResult = 0;
        assert.equal(actualResult, expectedResult, 'The result should be 0');
    });

    it('should return 5 for add(2),add(3)', () => {
        calc.add(2);
        calc.add(3);
        let actualResult = calc.get();
        let expectedResult = 5;
        assert.equal(actualResult, expectedResult, 'The result should be 5');
    });

    it('should return -5 for subtract(2), subtract(3)', () => {
        calc.subtract(2);
        calc.subtract(3);
        let actualResult = calc.get();
        let expectedResult = -5;
        assert.equal(actualResult, expectedResult, 'The result should be -5');
    });

    it('should return 2 for add(4), add("-2"), subtract(2), subtract("-2")', () => {
        calc.add(4);
        calc.add('-2');
        calc.subtract(2);
        calc.subtract('-2');
        let actualResult = calc.get();
        let expectedResult = 2
        assert.equal(actualResult, expectedResult, 'The result should be 2');
    });

    it('should return 2.5 for add(2.5)', () => {
        calc.add(2.5);
        let actualResult = calc.get();
        let expectedResult = 2.5;
        assert.equal(actualResult, expectedResult, 'The result should be 2.5');
    });

    it('should return -2.5 for subtract(2.5)', () => {
        calc.subtract(2.5);
        let actualResult = calc.get();
        let expectedResult = -2.5;
        assert.equal(actualResult, expectedResult, 'The result should be -2.5');
    });

    it('should return 2.5 for add(5.6), subtract(2.1)', () => {
        calc.add(5.6);
        calc.subtract(2.1);
        let actualResult = calc.get();
        let expectedResult = 5.6 - 2.1;
        assert.equal(actualResult, expectedResult, 'The result should be 2.5');
    });
    
    it('should return NaN for add(string)', () => {
        calc.add('something');
        let actualResult = calc.get();
        assert.isNaN(actualResult, 'The resulst should be NaN');
    });

    it('should return Nan for subtract(string)', () => {
        calc.subtract('something');
        let actualResult = calc.get();
        assert.isNaN(actualResult, 'The resulst should be NaN');
    });
});