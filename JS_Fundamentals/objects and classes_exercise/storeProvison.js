function solve(currentStockArr, deliveryArr) {
    let store = {};

    for (let i = 0; i < currentStockArr.length - 1; i += 2) {
        let product = currentStockArr[i];
        let quantity = Number(currentStockArr[i + 1]);

        store[product] = quantity;
    }

    for (let i = 0; i < deliveryArr.length - 1; i += 2) {
        let newProduct = deliveryArr[i];
        let newQuantity = Number(deliveryArr[i + 1]);

        if (store.hasOwnProperty(newProduct)) {
            store[newProduct] = store[newProduct] + newQuantity;
        } else {
            store[newProduct] = newQuantity;
        }

    }

    for (const key in store) {
        console.log(`${key} -> ${store[key]}`);
    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);