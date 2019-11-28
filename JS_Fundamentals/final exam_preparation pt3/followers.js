function solve(arr) {
    let followers = {};

    for (const command of arr) {
        let commandSplit = command.split(': ');
        let action = commandSplit[0];
        let username = commandSplit[1];

        if (action === 'New follower') {

            if (!followers.hasOwnProperty(username)) {
                followers[username] = {
                    'likes': 0,
                    'comments': 0
                };
            }

        } else if (action === 'Like') {
            let count = Number(commandSplit[2]);

            if (followers.hasOwnProperty(username)) {
                followers[username].likes += count;
            } else {
                followers[username] = {
                    'likes': count,
                    'comments': 0
                }
            }

        } else if (action === 'Comment') {

            if (followers.hasOwnProperty(username)) {
                followers[username].comments++;
            } else {
                followers[username] = {
                    'likes': 0,
                    'comments': 1
                }
            }

        } else if (action === 'Blocked') {

            if (followers.hasOwnProperty(username)) {
                delete followers[username];
            } else {
                console.log(`${username} doesn't exist.`);
            }
        }

    }

    console.log(`${Object.keys(followers).length} followers`);

    Object.keys(followers)
        .sort((a, b) => a.localeCompare(b))
        .sort((a, b) => (followers[b].likes + followers[b].comments) - (followers[a].likes + followers[a].comments))
        .map(follower => console.log(`${follower}: ${followers[follower].likes + followers[follower].comments}`));
}

solve([
    'Like: A: 3',
    'Comment: A',
    'New follower: B',
    'Blocked: A',
    'Comment: B',
    'Like: C: 5',
    'Like: D: 5',
    'Log out'
]);