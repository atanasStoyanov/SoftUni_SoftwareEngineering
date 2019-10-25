function solve(arr) {
    let movies = {};

    for (let i = 0; i < arr.length; i++) {
        let token = arr[i];
        
        if (token.includes('addMovie')) {
            let addMovieArr = token.split('addMovie ');
            let movieName = addMovieArr[1];
            
            if (movies.hasOwnProperty(movieName) === false) {
                movies[movieName] = {name: movieName};
            }

        } else if (token.includes('directedBy')) {
            let [movieName, director] = token.split(' directedBy ');

                if (movies.hasOwnProperty(movieName) === true) {
                    movies[movieName]['director'] = director;
                }
            
        } else {
            let [movieName, date] = token.split(' onDate ');

            if (movies.hasOwnProperty(movieName) === true) {
                movies[movieName]['date'] = date;
            }
        }
    }

    for (const movieName in movies) {
        const movie = movies[movieName];
        if (movie.hasOwnProperty('name') && movie.hasOwnProperty('director') && movie.hasOwnProperty('date') ) {
            console.log(JSON.stringify(movie));
            
        }
    }
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);