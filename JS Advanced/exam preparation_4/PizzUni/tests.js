let PizzUni = require('./02. PizzUni_Ресурси');
let assert = require('chai').assert;

describe('Test PizzUni class', () => {
    describe('Test constructor()', () => {
        it('check constructor', () => {
            let actualResult = new PizzUni();
            let expectedResult = {
                registeredUsers: [],
                availableProducts: {
                    pizzas: ["Italian Style", "Barbeque Classic", "Classic Margherita"],
                    drinks: ["Coca-Cola", "Fanta", "Water"]
                },
                orders: []
            }

            assert.deepEqual(actualResult, expectedResult, 'The result is not correct');
        });
    });

    describe('Test registerUser({email})', () => {
        let pizz;
        beforeEach(function () {
            pizz = new PizzUni();
        });

        it('check with non existing user', () => {
            let actualResult = pizz.registerUser('A');
            let expectedResult = {
                email: 'A',
                orderHistory: []
            }
            assert.deepEqual(actualResult, expectedResult, 'The result is not correct');
        });

        it('check with existing user', () => {
            pizz.registerUser('A');
            assert.throw(() => pizz.registerUser('A'), 'This email address (A) is already being used!');
        });
    });

    describe('Test makeAnOrder()', () => {
        let pizz;
        beforeEach(function () {
            pizz = new PizzUni();
        });

        it('check with not a registered user', () => {
            assert.throw(() => pizz.makeAnOrder('A', 'Italian Style', 'Fanta'), 'You must be registered to make orders!');
        });

        it('check with invalid pizza', () => {
            pizz.registerUser('A');
            assert.throw(() => pizz.makeAnOrder('A', 'Invalid', 'Fanta'), 'You must order at least 1 Pizza to finish the order.');
        });

        it('check with valid input', () => {
            pizz.registerUser('A');
            let actualResult = pizz.makeAnOrder('A', 'Italian Style', 'Fanta');
            let expectedResult = 0;
            assert.equal(actualResult, expectedResult, 'The result is not correct');
        });

        it('check without drink', () => {
            pizz.registerUser('A');
            pizz.makeAnOrder('A', 'Italian Style');
            let actualResult = pizz.registeredUsers.find(u => u.email === 'A')
            let expectedResult = {
                email: 'A',
                orderHistory: [{ orderedPizza: 'Italian Style' }]
            }
            assert.deepEqual(actualResult, expectedResult, 'The result is not correct');
        });
    });

    describe('Test detailsAboutMyOrder()', () => {
        let pizz;
        beforeEach(function () {
            pizz = new PizzUni();
            pizz.registerUser('A');
            pizz.makeAnOrder('A', 'Italian Style', 'Fanta');
        });

        it('check with invalid index', () => {
            assert.isUndefined(pizz.detailsAboutMyOrder(1), 'The result is not correct');
        })
        it('check with valid index', () => {
            let actualResult = pizz.detailsAboutMyOrder(0);
            let expectedResult = 'Status of your order: pending';
            assert.equal(actualResult, expectedResult, 'The result is not correct');
        });
    });

    describe('Test completeOrder()', () => {
        let pizz;
        beforeEach(function () {
            pizz = new PizzUni();
            pizz.registerUser('A');
        });

        it('check with no orders', () => {
            assert.isUndefined(pizz.completeOrder(), 'The result is not correct');
        });

        it('check with existing order', () => {
            pizz.makeAnOrder('A', 'Italian Style', 'Fanta');
            let actualResult = pizz.completeOrder();
            let expectedResult = {
                email: 'A',
                orderedDrink: 'Fanta',
                orderedPizza: 'Italian Style',
                status: 'completed'
            }
            assert.deepEqual(actualResult, expectedResult, 'The result is not correct');
        });
    });

    describe('Test doesTheUserExist({email})', () => {
        let pizz;
        beforeEach(function () {
            pizz = new PizzUni();
            pizz.registerUser('A');
        });

        it('check with existing user', () => {
            let actualResult = pizz.doesTheUserExist('A');
            let expectedResult = {
                email: 'A',
                orderHistory: []
            }
            assert.deepEqual(actualResult, expectedResult, 'The result is not correct');
        });
    });
});