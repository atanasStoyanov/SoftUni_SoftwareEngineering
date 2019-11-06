function solve(arr) {
    let phonebook = {};
    arr = arr
        .map(a => a.split(' '))
        .map(a => phonebook[a[0]] = a[1])

    for (const key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`);

    }

}

solve([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);