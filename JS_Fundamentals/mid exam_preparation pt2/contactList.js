function solve(arr) {
    let contactList = arr.shift().split(' ');

    let actions = {
        'Add' : (paramsArr, list) => list.indexOf(paramsArr[0]) < 0 ? list.push(paramsArr[0]) : list.splice(Number(paramsArr[1]), 0, paramsArr[0]),
        'Remove' : (paramsArr, list) => (Number(paramsArr[0]) >= 0 && Number(paramsArr[0]) < list.length) ? list.splice(Number(paramsArr[0]), 1) : list = list,
        'Export' : (paramsArr, list) => {
            let startIndex = Number(paramsArr[0]);
            let count = Number(paramsArr[1]);
            let toPrint = '';
            if (startIndex + count < list.length) {
                toPrint = list.slice(startIndex, count).join(' ')
                console.log(toPrint);
            } else {
                toPrint = list.slice(startIndex).join(' ')
                console.log(toPrint);
            }
    },
        'Print' : (paramsArr, list) => paramsArr[0] === 'Normal' ? console.log(`Contacts: ${list.join(' ')}`) : console.log(`Contacts: ${list = list.reverse().join(' ')}`)
    }

    arr.map(a => {
        let [action, ...params] = a.split(' ');

        actions[action](params, contactList);
    })

}

solve([
    'Zayn Katy Ariana Avril Nick Mikolas',
    'Remove 3',
    'Add Jacob 0',
    'Export 0 3',
    'Export 3 8',
    'Print Reversed'
]);