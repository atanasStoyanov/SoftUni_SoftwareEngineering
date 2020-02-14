let SkiResort = require('./solution');
let assert = require('chai').assert;

describe('SkiResort', function () {

    describe('Test constructor functionality', () => {
        it('test with string as param', () => {
            let resort = new SkiResort('Pesho');
            let name = resort.name;
            let voters = resort.voters;
            let hotels = resort.hotels;

            assert.equal(name, 'Pesho', 'The name should be Pesho');
            assert.equal(voters, 0, 'Voters should be 0');
            assert.deepEqual(hotels, [], 'The result should be empty array');
        });

    });

    describe('Test bestHotel() functionality', () => {
        it('test with 0 voters', () => {
            let resort = new SkiResort('Pesho');
            let actualResult = resort.bestHotel;
            let expectedResult = 'No votes yet';

            assert.equal(actualResult, expectedResult, 'The result is not correct');
        });

        it('test with 2 voters', () => {
            let resort = new SkiResort('Pesho');
            resort.build('TestHotel', 1);
            resort.build('TestHotel2', 2);
            resort.book('TestHotel', 1);
            resort.book('TestHotel2', 2);
            resort.leave('TestHotel', 1, 1);
            resort.leave('TestHotel2', 2, 1);
            let actualResult = resort.bestHotel;
            let expectedResult = 'Best hotel is TestHotel2 with grade 2. Available beds: 2';
            assert.equal(actualResult, expectedResult, 'Incorrect result');
        });
    });

    describe('Test build() functionality', () => {
        let resort;
        this.beforeEach(function () {
            resort = new SkiResort('Pesho');
        });

        it('test with name = ""', () => {
            assert.throw(() => resort.build('', 1), 'Invalid input');
        });

        it('test with beds < 1', () => {
            assert.throw(() => resort.build('Test', 0), 'Invalid input');
        });

        it('test with build(test, 1)', () => {
            let actualResult = resort.build('test', 1);
            let expectedResult = 'Successfully built new hotel - test';
            assert.equal(actualResult, expectedResult, 'Incorrect result');
        });
    });

    describe('Test book() functionality', () => {
        let resort;
        this.beforeEach(function () {
            resort = new SkiResort('Pesho');
            resort.build('Gosho', 1);
        });

        it('test with name = ""', () => {
            assert.throw(() => resort.book('', 1), 'Invalid input');
        });
        
        it('test with beds < 1', () => {
            assert.throw(() => resort.book('Test', 0), 'Invalid input');
        });

        it('test with non existing hotel', () => {
            assert.throw(() => resort.book('Test', 1), 'There is no such hotel');
        });

        it('test with beds more than available', () => {
            assert.throw(() => resort.book('Gosho', 2), 'There is no free space');
        });

        it('test successfull booking', () => {
            let actualResult = resort.book('Gosho', 1);
            let expectedResult = 'Successfully booked';
            assert.equal(actualResult, expectedResult, 'Incorrect result');
        });

        it('test beds decrease', () => {
            resort.book('Gosho', 1);
            let hotel = resort.hotels.find(hotel => hotel.name === 'Gosho');
            let actualResult = hotel.beds;
            let expectedResult = 0;
            assert.equal(actualResult, expectedResult, 'Incorrect result');
        });
    });

    describe('Test leave() functionality', () => {
        let resort;
        this.beforeEach(function () {
            resort = new SkiResort('Pesho');
            resort.build('Gosho', 1);
            resort.book('Gosho', 1);
        });

        it('test with name = ""', () => {
            assert.throw(() => resort.leave('', 1), 'Invalid input');
        });

        it('test with beds < 1', () => {
            assert.throw(() => resort.leave('Test', 0), 'Invalid input');
        });

        it('test with non existing hotel', () => {
            assert.throw(() => resort.leave('Test', 1), 'There is no such hotel');
        });

        it('test with valid input', () => {
            let actualResult = resort.leave('Gosho', 1, 1);
            let expectedResult = '1 people left Gosho hotel';
            assert.equal(actualResult, expectedResult, 'Incorrect result');
        });

        it('test voters increase', () => {
            resort.leave('Gosho', 1, 1);
            let actualResult = resort.voters;
            let expectedResult = 1;
            assert.equal(actualResult, expectedResult, 'Incorrect result');
        });

        it('test hotel beds increase', () => {
            resort.leave('Gosho', 1, 1);
            let hotel = resort.hotels.find(hotel => hotel.name === 'Gosho');
            let actualResult = hotel.beds;
            let expectedResult = 1;
            assert.equal(actualResult, expectedResult, 'Incorrect result');
        });

        it('test points increase', () => {
            resort.leave('Gosho', 1, 1);
            let hotel = resort.hotels.find(hotel => hotel.name === 'Gosho');
            let actualResult = hotel.points;
            let expectedResult = 1;
            assert.equal(actualResult, expectedResult, 'Incorrect result');
        });
    });

    describe('Test averageGrade() functionality', () =>{
        let resort;
        this.beforeEach(function () {
            resort = new SkiResort('Pesho');
            resort.build('Gosho', 1);
            resort.book('Gosho', 1);
        });

        it('test with 0 voters', () => {
            let actualResult = resort.averageGrade();
            let expectedResult = 'No votes yet';
            assert.equal(actualResult, expectedResult, 'Incorrect result');
        });

        it('test with 1 voter', () => {
            resort.leave('Gosho', 1, 1);
            let actualResult = resort.averageGrade();
            let expectedResult = 'Average grade: 1.00';
            assert.equal(actualResult, expectedResult, 'Incorrect result');
        });

        it('test with 2 voters', () => {
            resort.build('Stamat', 1);
            resort.book('Stamat', 1);
            resort.leave('Gosho', 1, 1);
            resort.leave('Stamat', 1, 2);
            let actualResult = resort.averageGrade();
            let expectedResult = 'Average grade: 1.50';
            assert.equal(actualResult, expectedResult, 'Incorrect result');
        });
    });
});
