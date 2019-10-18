function solve(arr) {
    const guestList = [];

    let addGuest = name => guestList.includes(name) ? console.log(`${name} is already in the list!`) : guestList.push(name);
    let removeGuest = name => guestList.includes(name) ? guestList.splice(guestList.indexOf(name), 1) : console.log(`${name} is not in the list!`);

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');
        let name = command[0];


        if (command.includes('not')) {
            removeGuest(name);
        } else {
            addGuest(name)
        }
    }

    console.log(guestList.join('\n'));

}

solve(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);