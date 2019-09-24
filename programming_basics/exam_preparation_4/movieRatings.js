function movieRatings(input) {
    let moviesNumber = Number(input.shift());
    let lowestRating = Number.MAX_SAFE_INTEGER;
    let lowestRatingMovie = '';
    let highestRating = Number.MIN_SAFE_INTEGER;
    let highestRatingMovie = '';
    let averageRating = 0;

    for (let index = 0; index < moviesNumber; index++) {
        let movie = input.shift();
        let rating = Number(input.shift());

        if (rating < lowestRating) {
            lowestRating = rating;
            lowestRatingMovie = movie;
        }

        if (rating > highestRating) {
            highestRating = rating;
            highestRatingMovie = movie;
        }

        averageRating += rating;
    }

    averageRating /= moviesNumber;
    console.log(`${highestRatingMovie} is with highest rating: ${highestRating.toFixed(1)}`);
    console.log(`${lowestRatingMovie} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${averageRating.toFixed(1)}`);
}

movieRatings([3, 'Interstellar', 8.5, 'Dangal', 8.3, 'Green Book', 8.2]);