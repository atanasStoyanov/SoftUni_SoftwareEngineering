function solve(arr) {
    let capcity = Number(arr.shift());
    let manager = {};

    for (const command of arr) {

        if (command.includes('Add')) {
            let [action, username, sent, received] = command.split('=');

            if (!manager.hasOwnProperty(username)) {
                manager[username] = {
                    'sent': Number(sent),
                    'received': Number(received)
                }
            }

        } else if (command.includes('Message')) {
            let [action, sender, receiver] = command.split('=');

            if (manager.hasOwnProperty(sender) && manager.hasOwnProperty(receiver)) {
                manager[sender].sent += 1;
                manager[receiver].received += 1;

                let senderCapacity = manager[sender].sent + manager[sender].received;
                let receiverCapacity = manager[receiver].sent + manager[receiver].received;

                if (senderCapacity >= capcity) {
                    console.log(`${sender} reached the capacity!`);
                    delete manager[sender];
                }

                if (receiverCapacity >= capcity) {
                    console.log(`${receiver} reached the capacity!`);
                    delete manager[receiver];
                }
            }

        } else if (command.includes('Empty')) {
            let [action, username] = command.split('=');

            if (username === 'All') {
                manager = {};
            } else {
                delete manager[username];
            }

        } else {
            console.log(`Users count: ${Object.keys(manager).length}`);

            Object.keys(manager)
                .sort()
                .sort((a, b) => manager[b].received - manager[a].received)
                .map(user => console.log(`${user} - ${manager[user].sent + manager[user].received}`));
        }
    }
}

solve([
    '12',
    'Add=Bonnie=3=5',
    'Add=Johny=4=4',
    'Empty=All',
    'Add=Bonnie=3=3',
    'Statistics'

]);
