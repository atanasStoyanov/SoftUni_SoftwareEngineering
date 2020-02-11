let assert = require('chai').assert;
let expect = require('chai').expect;
let Warehouse = require('./warehouse');

describe('Test class Warehouse functionality', () => {

    describe('Test constructor functionality', () => {

        it('Test capacity prop with valid input => 1', () => {
            let warehouse = new Warehouse(1);
            let actualResult = warehouse.capacity;
            let expectedResult = 1;
            assert.equal(actualResult, expectedResult, 'The capacity should be 1');
        });

        it('test availableProducts prop', () => {
            let warehouse = new Warehouse(1);
            let actualResult = warehouse.availableProducts;
            let expectedResult = { 'Food': {}, 'Drink': {} };
            assert.deepEqual(actualResult, expectedResult, 'The result is not correct');
        });

        it('Test capacity prop with invalid input => Pesho', () => {
            assert.throw(() => new Warehouse('Pesho'), 'Invalid given warehouse space');
        });

        it('Test capacity prop with invalid input => -1', () => {
            assert.throw(() => new Warehouse(-1), 'Invalid given warehouse space');
        });

    });

    describe('Test addProduct(type, product, quantity)', () => {

        it('test with valid data addProduct(Food, bread, 1)', () => {
            let warehouse = new Warehouse(1);
            warehouse.addProduct('Food', 'bread', 1);
            let actualResult = warehouse.availableProducts['Food']['bread'];
            let expectedResult = 1
            assert.equal(actualResult, expectedResult, 'The result should be 1');
        });

        it('test with valid data addProduct(Drink, milk, 1', () => {
            let warehouse = new Warehouse(1);
            warehouse.addProduct('Drink', 'milk', 1);
            let actualResult = warehouse.availableProducts['Drink']['milk'];
            let expectedResult = 1;
            assert.equal(actualResult, expectedResult, 'The result should be 1');
        });

        it('test with products quantity bigger than capacity - addProduct(Food, bread, 2)', () => {
            let warehouse = new Warehouse(1);
            assert.throw(() => warehouse.addProduct('Food', 'bread', 2), 'There is not enough space or the warehouse is already full');
        });
    });

    describe('Test orderProducts(type)', () => {
        it('test sorting availableProducts with Food products - bread = 1, ham = 2', () => {
            let warehouse = new Warehouse(10);
            warehouse.addProduct('Food', 'bread', 1);
            warehouse.addProduct('Food', 'ham', 2);
            warehouse.addProduct('Drink', 'milk', 1);
            warehouse.addProduct('Drink', 'coffe', 2);

            let actualResult = JSON.stringify(warehouse.orderProducts('Food'));
            let expectedResult = `{"ham":2,"bread":1}`;
            assert.deepEqual(actualResult, expectedResult, 'The result is not correct');
        });

        it('test sorting availableProducts without any products', () => {
            let warehouse = new Warehouse(1);
            let actualResult = JSON.stringify(warehouse.orderProducts('Drink'));
            let expectedResult = `{}`;
            assert.deepEqual(actualResult, expectedResult, 'The result should be empty object');
        });

    });

    describe('Test occupiedCapacity()', () => {
        it('test with zero available products', () => {
            let warehouse = new Warehouse(1);
            let actualResult = warehouse.occupiedCapacity();
            let expectedResult = 0;
            assert.equal(actualResult, expectedResult, 'The result should be 0');
        });

        it('test with 15 available products', () => {
            let warehouse = new Warehouse(20);
            warehouse.addProduct('Food', 'bread', 1);
            warehouse.addProduct('Food', 'ham', 2);
            warehouse.addProduct('Drink', 'milk', 3);
            warehouse.addProduct('Drink', 'coffe', 4);
            warehouse.addProduct('Food', 'banana', 5);
            let actualResult = warehouse.occupiedCapacity();
            let expectedResult = 15;
            assert.equal(actualResult, expectedResult, 'The result should be 15');
        });

        it('test with 2 available products only from type Food', () => {
            let warehouse = new Warehouse(20);
            warehouse.addProduct('Food', 'bread', 1);
            warehouse.addProduct('Food', 'ham', 2);
            let actualResult = warehouse.occupiedCapacity();
            let expectedResult = 3;
            assert.equal(actualResult, expectedResult, 'The result should be 3');
        });

        it('test with 2 available products only from type Drinks', () => {
            let warehouse = new Warehouse(20);
            warehouse.addProduct('Drink', 'milk', 3);
            warehouse.addProduct('Drink', 'coffe', 4);
            let actualResult = warehouse.occupiedCapacity();
            let expectedResult = 7;
            assert.equal(actualResult, expectedResult, 'The result should be 7');
        });

    });

    describe('Test revision()', () => {
        it('test with zero products', () => {
            let warehouse = new Warehouse(1);
            let actualResult = warehouse.revision();
            let expectedResult = 'The warehouse is empty';
            assert.equal(actualResult, expectedResult, 'The result should be The warehouse is empty');
        });

        it('test with 2 products', () => {
            let warehouse = new Warehouse(2);
            warehouse.addProduct('Food', 'bread', 1);
            warehouse.addProduct('Drink', 'milk', 1);
            let actualResult = warehouse.revision();
            let expectedResult = `Product type - [Food]\n- bread 1\nProduct type - [Drink]\n- milk 1`;
            assert.equal(actualResult, expectedResult, 'The result is not correct');
        });
    });

    describe('Test scrapeAProduct()', () => {
        it('test with non existing product', () => {
            let warehouse = new Warehouse(1);
            assert.throw(() => warehouse.scrapeAProduct('bread', 1), 'bread do not exists');
        });

        it('test case reduce quantity with 1', () => {
            let warehouse = new Warehouse(2);
            warehouse.addProduct('Food', 'bread', 2);
            let actualResult = JSON.stringify(warehouse.scrapeAProduct('bread', 1));
            let expectedResult = `{"bread":1}`;
            assert.equal(actualResult, expectedResult, 'The result is not correct');
        });

        it('test case reduce quantity with more than available', () => {
            let warehouse = new Warehouse(1);
            warehouse.addProduct('Food', 'bread', 1);
            let actualResult = JSON.stringify(warehouse.scrapeAProduct('bread', 2));
            let expectedResult = `{"bread":0}`;
            assert.equal(actualResult, expectedResult, 'The result is not correct');
        });
    });

});