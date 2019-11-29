function solve(arr) {
    let followers = {};

    function addNewUSer(username, obj) {
        if (!obj.hasOwnProperty(username)) {
            obj[username] = {
                'likes': 0,
                'comments': 0
            }
        }

        return obj;
    }

    function like(username, likes, obj) {
        addNewUSer(username, obj);
        obj[username].likes += Number(likes);
        return obj;
    }

    function comment(username, obj) {
        addNewUSer(username, obj);
        obj[username].comments++;
        return obj;
    }

    function block(username, obj) {
        if (obj.hasOwnProperty(username)) {
            delete obj[username];
        } else {
            console.log(`${username} doesn't exist.`);
        }

        return obj;
    }

    for (const command of arr) {
        let commandSplit = command.split(': ');
        let action = commandSplit[0];
        let username = commandSplit[1];

        if (action === 'New follower') {
            addNewUSer(username, followers);
        } else if (action === 'Like') {
            let count = Number(commandSplit[2]);
            like(username, count, followers);
        } else if (action === 'Comment') {
            comment(username, followers);
        } else if (action === 'Blocked') {
            block(username, followers)
        }

    }

    console.log(`${Object.keys(followers).length} followers`);

    Object.keys(followers)
        .sort((a, b) => a.localeCompare(b))
        .sort((a, b) => followers[b].likes - followers[a].likes)
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