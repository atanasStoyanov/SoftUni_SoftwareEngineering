function solve(arr) {
    let listOfUser = [];

    let articlesList = arr.reduce((list, token) => {

        if (token.includes('user')) {
            let userName = token.split('user ').join('');
            listOfUser.push(userName);
        } else if (token.includes('article')) {
            let articleName = token.split('article ').join('');
            list[articleName] = {};

        } else {
            let splitedToken = token.split(': ');
            let commentInfo = splitedToken.pop();
            let [title, comment] = commentInfo.split(', ');
            let [user, article] = splitedToken.shift().split(' posts on ');

            if (listOfUser.includes(user) && list.hasOwnProperty(article)) {
                list[article][user] = `${title} - ${comment}`;
            }
        }

        return list;
    }, {});

    Object.keys(articlesList)
        .sort((a, b) => Object.keys(articlesList[b]).length - Object.keys(articlesList[a]).length)
        .map(art => {
            console.log(`Comments on ${art}`);

            Object.keys(articlesList[art])
                .sort()
                .map(us => console.log(`--- From user ${us}: ${articlesList[art][us]}`));
        });

}

solve([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
]);