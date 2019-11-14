function solve(arr) {
    let bookShelf = arr.reduce((agr, token) => {

        if (token.includes('->')) {
            let [id, shelfGenre] = token.split(' -> ');

            if (agr.hasOwnProperty(id) === false) {
                agr[id] = [shelfGenre];
            }
        } else {
            let [bookName, bookGenre] = token.split(', ');

            Object.keys(agr)
                .map(shelf => {

                    if (agr[shelf].includes(bookGenre)) {
                        agr[shelf].push(bookName);
                    }

                });
        }

        return agr;
    }, {});

    Object.keys(bookShelf)
        .sort((a, b) => bookShelf[b].length - bookShelf[a].length)
        .map(shelf => {
            console.log(`${shelf} ${bookShelf[shelf].shift()}: ${bookShelf[shelf].length}`);
            bookShelf[shelf].map(book => console.log(`--> ${book}`))
        })

}

solve([
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'
]);