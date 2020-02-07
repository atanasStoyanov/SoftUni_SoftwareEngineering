let sum = require('./index');
let assert = require('chai').assert;
let expect = require('chai').expect;

describe('sum() behavior', () => {

    it('check the return result', () => {
        let result = sum(5, 37);

        assert.equal(result, 42, 'The result should be 42');
    });

    it('check the result type', () => {
        let result = sum(5, '10') ;

        assert.isNumber(result, 'The result is not a number');
    });


})