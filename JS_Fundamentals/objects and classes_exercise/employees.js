function solve(arr) {
    arr = arr
        .reduce((agr, prop) => {
            agr[prop] = prop.length;
            return agr;
            }, {});
    
    for (const key in arr) {
        console.log(`Name: ${key} -- Personal Number: ${arr[key]}`);
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);