function solve(arr) {
    let shopsList = arr.shift().split(' ');
    let commandsCount = Number(arr.shift());

    function include(shopName) {
        shopsList.push(shopName);

        return shopsList;
    }

    function visit(num, order) {
        
        if (order === 'first' && num <= shopsList.length) {
            shopsList.splice(0, num);
        } else if (num <= shopsList.length) {
            shopsList.splice(shopsList.length - num, num)
        }

        return shopsList;
    }

    function prefer(firstIndex, secondIndex) {
        if ((firstIndex >= 0 && firstIndex < shopsList.length) && (secondIndex >= 0 && secondIndex < shopsList.length)) {
            let helper = shopsList[firstIndex];
            shopsList[firstIndex] = shopsList[secondIndex];
            shopsList[secondIndex] = helper;
        }

        return shopsList;
    }

    function place(shopName, i) {
        if (i + 1 >= 0 && i + 1 < shopsList.length) {
            shopsList.splice(i + 1, 0, shopName);
        }

        return shopsList
    }

    for (let i = 0; i < commandsCount; i++) {
        let [action, ...params] = arr[i].split(' ');
        
        if (action === 'Include') {
            let shop = params[0];
            include(shop);
        } else if (action === 'Visit') {
            let order = params[0];
            let count = Number(params[1]);
            visit(count, order);
        } else if (action === 'Prefer') {
            let firstShopIndex = Number(params[0]);
            let secondShopIndex = Number(params[1]);
            prefer(firstShopIndex, secondShopIndex);
        } else {
            let shop = params[0];
            let index = Number(params[1]);
            place(shop, index);
        }
    }

    console.log(`Shops left:\n${shopsList.join(' ')}`);
    
}

solve([
    'Boutique Flowers CandyStore ThriftShop Versace Groceries ToyStore PeakStore',
    6,
    'Visit first 9',
    'Visit last 4',
    'Prefer 3 8',
    'Prefer 0 1',
    'Place Store 7',
    'Place ShoeAquarium 2'

]);