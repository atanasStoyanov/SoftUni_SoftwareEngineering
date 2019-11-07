function solve(arr) {
    let storage = new Map();

    arr = arr.map(a => {
        let [product, quantity] = a.split(' ');

        if (storage.has(product)) {
            let oldQuantity = storage.get(product);
            storage.set(product, oldQuantity + Number(quantity));
        } else {
            storage.set(product, Number(quantity));
        }
    });

    let iterable = Array.from(storage.entries());

    for (const element of iterable) {
        console.log(`${element[0]} -> ${element[1]}`);
    }

}

solve([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);