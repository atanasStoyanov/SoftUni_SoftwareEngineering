let BookStore = require('./02. Book Store_Ресурси');
let assert = require('chai').assert;

describe('Test BookStore class', () => {

    describe('Test constructor()', () => {
        it('check with valid input', () => {
            let actualResult = new BookStore('Test');
            let expectedResult = {
                name: 'Test',
                books: [],
                _workers: []
            }
            assert.deepEqual(actualResult, expectedResult, 'The result is not correct');
        });

        it('check get workers()', () => {
            let store = new BookStore('Test');
            let actualResult = store.workers;
            let expectedResult = [];
            assert.deepEqual(actualResult, expectedResult, 'The result in not correct');
        });
    });

    describe('Test stockBooks()', () => {
        let store;
        beforeEach(function () {
            store = new BookStore('Test');
        });

        it('check with 1 book', () => {
            let actualResult = store.stockBooks(['a-b']);
            let expectedResult = [{ title: 'a', author: 'b' }];
            assert.deepEqual(actualResult, expectedResult, 'The result is not correct');
        });
    });

    describe('Test hire()', () => {
        let store;
        beforeEach(function () {
            store = new BookStore('Test');
        });

        it('check with not hired worker', () => {
            let actualResult = store.hire('a', 'b');
            let expectedResult = 'a started work at Test as b';
            assert.equal(actualResult, expectedResult, 'The result is not correct');
        });

        it('check with existing worker', () => {
            store.hire('a', 'b');
            assert.throw(() => store.hire('a', 'c'), 'This person is our employee'); 
        });
    });

    describe('Test fire()', () => {
        let store;
        beforeEach(function () {
            store = new BookStore('Test');
            store.hire('a', 'b');
        });

        it('check with not hired worker', () => {
            assert.throw(() => store.fire('c'), "c doesn't work here");
        });

        it('check with hired worker', () => {
            let actualResult = store.fire('a');
            let expectedResult = 'a is fired';
            assert.equal(actualResult, expectedResult, 'The result is not correct');
        });

        it('check if fired worker is removd from workers arr', () => {
            store.fire('a');
            let actualResult = store.workers;
            let expectedResult = [];
            assert.deepEqual(actualResult, expectedResult, 'The result is not correct');
        });
    });

    describe('Test sellBook()', () => {
        let store;
        beforeEach(function () {
            store = new BookStore('Test');
            store.stockBooks(['a-b'])
            store.hire('c', 'd');
        });

        it('check with non existing book', () => {
            assert.throw(() => store.sellBook('e', 'c'), 'This book is out of stock');
        });

        it('check with not hired worker', () => {
            assert.throw(() => store.sellBook('a', 'e'), 'e is not working here');
        });
    });

    describe('Test printWorkers()', () => {
        let store;
        beforeEach(function () {
            store = new BookStore('Test');
            store.stockBooks(['a-b'])
            store.hire('c', 'd');
        });

        it('check with two workers and 1 sold book', () => {
            store.hire('e', 'f');
            store.sellBook('a', 'c');
            let actualResult = store.printWorkers();
            let expectedResult = 'Name:c Position:d BooksSold:1\nName:e Position:f BooksSold:0';
            assert.equal(actualResult, expectedResult, 'The result is not correct');
        });
    });
});