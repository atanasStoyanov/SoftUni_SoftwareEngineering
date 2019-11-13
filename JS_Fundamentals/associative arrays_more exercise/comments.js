function solve(arr) {
    let listOfUser = [];
    let listOfArticles = {};

    arr.map(token => {

        if (token.includes('user')) {
            let userName = token.split('user ').join('');
            listOfUser.push(userName);
        } else if (token.includes('article')) {
            let articleName = token.split('article ').join('');
            listOfArticles[articleName] = {};
        } else {
            let splitedToken = token.split(': ');
            let commentInfo = splitedToken.pop();
            let [title, comment] = commentInfo.split(', ');
            let [user, article] = splitedToken.shift().split(' posts on ');

            if (listOfUser.includes(user) && listOfArticles.hasOwnProperty(article)) {
                listOfArticles[article][user] = `${title} - ${comment}`;
            }
        }
    });

    Object.keys(listOfArticles)
        .sort((a, b) => Object.keys(listOfArticles[b]).length - Object.keys(listOfArticles[a]).length)
        .map(art => {
            console.log(`Comments on ${art}`);

            Object.keys(listOfArticles[art])
                .sort()
                .map(us => console.log(`--- From user ${us}: ${listOfArticles[art][us]}`));
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