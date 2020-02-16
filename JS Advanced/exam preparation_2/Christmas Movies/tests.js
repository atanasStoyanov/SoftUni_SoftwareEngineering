let ChristmasMovies = require('./02. Christmas Movies_Resources');
let assert = require('chai').assert;

describe('Test ChristmasMovies class functionality', () => {

    describe('Test constructor()', () => {
        it('check if properties are created', () => {
            let movies = new ChristmasMovies();
            assert.deepEqual(movies.actors, [], 'The result should be empty array');
            assert.deepEqual(movies.watched, {}, 'The resuld should be empty object');
            assert.deepEqual(movies.movieCollection, [], 'The result should be empty array');
        });

    });

    describe('Test buyMovie()', () => {
        let movies;
        beforeEach(function () {
            movies = new ChristmasMovies;
        });

        it('check with non existing movie', () => {
            let actualResult = movies.buyMovie('A', ['a', 'b']);
            let expextedResult = "You just got A to your collection in which a, b are taking part!";
            assert.equal(actualResult, expextedResult, 'The result is not correct');
        });

        it('check with no existing movie and repeating actors', () => {
            let actualResult = movies.buyMovie('A', ['a', 'b', 'a']);
            let expextedResult = "You just got A to your collection in which a, b are taking part!";
            assert.equal(actualResult, expextedResult, 'The result is not correct');
        });

        it('check with existing movie', () => {
            movies.buyMovie('A', ['a']);
            assert.throw(() => movies.buyMovie('A', ['a']), 'You already own A in your collection!');
        });
    });

    describe('Test discardMovie()', () => {
        let movies;
        beforeEach(function () {
            movies = new ChristmasMovies;
        });

        it('check with non existing movie', () => {
            assert.throw(() => movies.discardMovie('A'), 'A is not at your collection!');
        })

        it('check with not watched movie', () => {
            movies.buyMovie('A', ['a']);
            assert.throw(() => movies.discardMovie('A'), 'A is not watched!');
        });

        it('check with watched movie', () => {
            movies.buyMovie('A', ['a']);
            movies.watchMovie('A');
            let actualResult = movies.discardMovie('A');
            let expectedResult = 'You just threw away A!';
            assert.equal(actualResult, expectedResult, 'The result is not correct');
        });
    });

    describe('Test watchMovie()', () => {
        let movies;
        beforeEach(function () {
            movies = new ChristmasMovies;
        });

        it('check with not existingMovie', () => {
            assert.throw(() => movies.watchMovie('A'), 'No such movie in your collection!');
        });

        it('check with existing movie', () => {
            movies.buyMovie('A', ['a']);
            movies.watchMovie('A');
            assert.isTrue(movies.watched.hasOwnProperty('A'), 'The result is not correct');
        });

        it('check with already watched movie', () => {
            movies.buyMovie('A', ['a']);
            movies.watchMovie('A');
            movies.watchMovie('A');
            let actualResult = movies.watched['A'];
            let expectedResult = 2;
            assert.equal(actualResult, expectedResult, 'The result is not correct');
        });
    });

    describe('Test favouriteMovie()', () => {
        let movies;
        beforeEach(function () {
            movies = new ChristmasMovies;
            movies.buyMovie('A', ['a']);
            movies.buyMovie('B', ['b']);
        });

        it('check with no movies in watched lsit', () => {
            assert.throw(() => movies.favouriteMovie(), 'You have not watched a movie yet this year!');
        });

        it('check with A - watched 2 times and B - watched 1 time', () => {
            movies.watchMovie('A');
            movies.watchMovie('B');
            movies.watchMovie('A');
            let actualResult = movies.favouriteMovie();
            let expectedResult = 'Your favourite movie is A and you have watched it 2 times!';
            assert.equal(actualResult, expectedResult, 'The result is not correct');
        });

    });

    describe('Test mostStarredActor', () => {
        let movies;
        beforeEach(function () {
            movies = new ChristmasMovies;
        });

        it('check with no movies in watched list', () => {
            assert.throw(() => movies.mostStarredActor(), 'You have not watched a movie yet this year!');
        });
        it('check with a as most stared actor', () => {
            movies.buyMovie('A', ['a']);
            movies.buyMovie('B', ['b']);
            movies.buyMovie('C', ['a']);
            let actualResult = movies.mostStarredActor();
            let expectedResult = 'The most starred actor is a and starred in 2 movies!';
            assert.equal(actualResult, expectedResult, 'The result is not correct');
        });
    });

});