function solve(arr) {
    let account = arr.shift().split(' ');
    let action = arr.shift();

    while (action !== 'Play!') {
        let [command, game] = action.split(' ');
         
        if (command === 'Install') {

            if (!account.includes(game)) {
                account.push(game);
            }
        } else if (command === 'Uninstall') {

            if (account.includes(game)) {
                account.splice(account.indexOf(game), 1);
            }

        } else if (command === 'Update') {

            if (account.includes(game)) {
                account.splice(account.indexOf(game), 1);
                account.push(game);
            }

        } else {
            let [gameToExt, extenstion] = game.split('-');

            if (account.includes(gameToExt)) {
                let index = account.indexOf(gameToExt);
                account.splice(index + 1, 0, `${gameToExt}:${extenstion}`);
            }
        }

        action = arr.shift();
    }

    console.log(account.join(' '));
}

solve(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']
);