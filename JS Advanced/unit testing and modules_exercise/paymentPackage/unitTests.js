let assert = require('chai').assert;
let PaymentPackage = require('./paymentPackage');

describe('check class PaymentPackage behavior', () => {
   
    describe('check name', () => {
        it('should throw Error with invalid param', () => {
            assert.throw(() => new PaymentPackage(1, 1), 'Name must be a non-empty string');
        });

        it('should throw Error with empty string', () => {
            assert.throw(() => new PaymentPackage('', 1), 'Name must be a non-empty string');
        });

        it('should set property name to Pesho', () => {
            let package = new PaymentPackage('Pesho', 1);
            let actualResult = package.name;
            let expectedResult = 'Pesho';
            assert.equal(actualResult, expectedResult, 'The result should be Pesho');
        });

        it('should change name from Pesho to Gosho', () => {
            let package = new PaymentPackage('Pesho', 1);
            package.name = 'Gosho';
            let actualResult = package.name;
            let expectedResult = 'Gosho';
            assert.equal(actualResult, expectedResult, 'The result should be Gosho');
        });
    });

    describe('check value', () => {
        it('should throw Error with invalid param (string)', () => {
            assert.throw(() => new PaymentPackage('Pesho', 'Gosho'), 'Value must be a non-negative number');
        });

        it('should throw Error with invalid param < 0', () => {
            assert.throw(() => new PaymentPackage('Pesho', -1), 'Value must be a non-negative number');
        });

        it('should set property value to 1', () => {
            let package = new PaymentPackage('Pesho', 1);
            let actualResult = package.value;
            let expectedResult = 1;
            assert.equal(actualResult, expectedResult, 'The result should be 1');
        });

        it('should change the value from 1 to 2', () => {
            let package = new PaymentPackage('Pesho', 1);
            package.value = 2;
            let actualResult = package.value;
            let expectedResult = 2;
            assert.equal(actualResult, expectedResult, 'The result should be 2');
        });
    });

    describe('check VAT', () => {
        let package;
        beforeEach(function() {
            package = new PaymentPackage('Pesho', 1);
        })
        it('should set VAT to 20', () => {
            let actualResult = package.VAT;
            let expectedResult = 20;
            assert.equal(actualResult, expectedResult, 'The result should be 20');
        });

        it('should change VAT to 30', () => {
            package.VAT = 30;
            let actualResult = package.VAT;
            let expectedResult = 30;
            assert.equal(actualResult, expectedResult, 'The result should be 30');
        });

        it('should throw Error with invalid VAT (string)', () => {
            assert.throw(() => package.VAT = 'Gosho', 'VAT must be a non-negative number');
        });

        it('should throw Error with VAT < 0', () => {
            assert.throw(() => package.VAT = -1, 'VAT must be a non-negative number');
        });
        
    });

    describe('check active', () => {
        let package;
        beforeEach(function(){
            package = new PaymentPackage('Pesho', 1);
        });

        it('should set active to true', () => {
            let actualResult = package.active;
            let expectedResult = true;
            assert.equal(actualResult, expectedResult, 'The result should be true');
        });

        it('should change active to false', () => {
            package.active = false;
            let actualResult = package.active;
            let expectedResult = false;
            assert.equal(actualResult, expectedResult, 'The result should be false');
        });

        it('should throw Error with invalid type', () => {
            assert.throw(() => package.active = 'Pesho', 'Active status must be a boolean');
        });
    });

    describe('check toString()', () => {
        it('test toString valid data', () => {
            let package = new PaymentPackage('HR Services', 1500);
            let actualResult = package.toString();
            let expectedResult = 'Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800';
            assert.equal(actualResult, expectedResult, 'The result is not correct');
        });

        it('test toString with active = false', () => {
            let package = new PaymentPackage('HR Services', 1500);
            package.active = false;
            let actualResult = package.toString();
            let expectedResult = 'Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800';
            assert.equal(actualResult, expectedResult, 'The result is not correct');
        });

        it('test toString with value = 0', () => {
            let package = new PaymentPackage('HR Services', 0);
            let actualResult = package.toString();
            let expectedResult = 'Package: HR Services\n- Value (excl. VAT): 0\n- Value (VAT 20%): 0';
            assert.equal(actualResult, expectedResult, 'The result is not correct');
        });

    });

});