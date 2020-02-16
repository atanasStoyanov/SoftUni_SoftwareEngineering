let SoftUniFy = require('./03. Softunify_Ресурси');
let assert = require('chai').assert;

describe('Test SoftUniFy', () => {

    describe('Test constructor()', () => {
        it('check if allSongs property is created', () => {
            let actualResult = new SoftUniFy();
            let expectedResult = { allSongs: {} };
            assert.deepEqual(actualResult, expectedResult, 'The result is not correct');
        });
    });

    describe('Test downloadSong()', () => {
        let softunify;

        beforeEach(function () {
            softunify = new SoftUniFy();
        });

        it('check wtih no songs', () => {
            let actualResult = softunify.downloadSong('A', 'B', 'C');
            let expectedResult = { allSongs: { 'A': { rate: 0, votes: 0, songs: ['B - C'] } } };
            assert.deepEqual(actualResult, expectedResult, 'The result is not correct');
        });

        it('check with two song of given artist', () => {
            softunify.downloadSong('A', 'B', 'C');
            let actualtResult = softunify.downloadSong('A', 'D', 'E');
            let expectedResult = { allSongs: { 'A': { rate: 0, votes: 0, songs: ['B - C', 'D - E'] } } };
            assert.deepEqual(actualtResult, expectedResult, 'The result is not correct');
        });

    });

    describe('Test playSong(song)', () => {
        let softunify;

        beforeEach(function () {
            softunify = new SoftUniFy();
        });

        it('check with no downloaded songs', () => {
            let actualResult = softunify.playSong('A');
            let expectedResult = "You have not downloaded a A song yet. Use SoftUniFy's function downloadSong() to change that!";
            assert.equal(actualResult, expectedResult, 'The result is not correct');
        });

        it('check with not existing song', () => {
            softunify.downloadSong('A', 'B', 'C');
            let actualResult = softunify.playSong('A');
            let expectedResult = "You have not downloaded a A song yet. Use SoftUniFy's function downloadSong() to change that!";
            assert.equal(actualResult, expectedResult, 'The result is not correct');
        });

        it('check with existing song', () => {
            softunify.downloadSong('A', 'B', 'C');
            let actualResult = softunify.playSong('B');
            let expectedResult = 'A:\nB - C\n';
            assert.equal(actualResult, expectedResult, 'The result is not correct');
        });
    });

    describe('Test get songsList()', () => {
        let softunify;

        beforeEach(function () {
            softunify = new SoftUniFy();
        });

        it('check with empty song list', () => {
            let actualResult = softunify.songsList;
            let expectedResult = 'Your song list is empty';
            assert.equal(actualResult, expectedResult, 'The result is not correct');
        });

        it('check with two songs in the list', () => {
            softunify.downloadSong('A', 'B', 'C');
            softunify.downloadSong('D', 'E', 'F');
            let actualResult = softunify.songsList;
            let expectedResult = 'B - C\nE - F';
            assert.equal(actualResult, expectedResult, 'The result is not correct');
        });
    });

    describe('Test rateArtist()', () => {
        let softunify;

        beforeEach(function () {
            softunify = new SoftUniFy();
        });

        it('check with non existing artist', () => {
            let actualResult = softunify.rateArtist('A', 1);
            let expectedResult = 'The A is not on your artist list.';
            assert.equal(actualResult, expectedResult, 'The result is not correct');
        });
    });
});