function solve(arr) {
    let guestList = {
        'VIP': [],
        'regular': []
    };

    let pattern = /\d/;

    let guest = arr.shift();

    while (guest !== 'PARTY') {

        if (guest[0].match(pattern)) {
            guestList.VIP.push(guest);
        } else {
            guestList.regular.push(guest)
        }

        guest = arr.shift();
    }

    for (let i = 0; i < arr.length; i++) {
        let arrivedGuest = arr[i];

        if (arrivedGuest[0].match(pattern)) {
            guestList.VIP.splice(guestList.VIP.indexOf(arrivedGuest), 1);
        } else {
            guestList.regular.splice(guestList.regular.indexOf(arrivedGuest), 1);
        }
    }

    console.log(guestList.VIP.length + guestList.regular.length);
    
    if (guestList.VIP.length > 0) {
        console.log(guestList.VIP.join('\n'));

    }
    if (guestList.regular.length > 0) {
        console.log(guestList.regular.join('\n'));
    }

}

solve([
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);