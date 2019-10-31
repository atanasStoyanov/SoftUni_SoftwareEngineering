function solve(arr) {
    let giftsCollection = arr.shift().split(' ');
    
    function outOfStock(item) {
        for (let i = 0; i < giftsCollection.length; i++) {
            let currentGift = giftsCollection[i];
            
            if (currentGift === item) {
                giftsCollection[i] = 'None'
            }
        }

        return giftsCollection;
    }

    function required(item, i) {
        if (i >= 0 && i < giftsCollection.length) {
            giftsCollection.splice(i, 1, item);
        }

        return giftsCollection;
    }

    function justInCase(item) {
        giftsCollection.pop();
        giftsCollection.push(item);

        return giftsCollection;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        let [action, ...params] = arr[i].split(' ');
        let gift = params[0];
        
        if (action === 'OutOfStock') {
            outOfStock(gift);
        } else if (action === 'Required') {
            let index = Number(params[1]);
            required(gift, index);
        } else {
            justInCase(gift);
        }
    }

    console.log(giftsCollection.filter(a => a !== 'None').join(' '));
    
}

solve([
    'Sweets Cozonac Clothes Flowers Wine Clothes Eggs Clothes',
    'Required Paper 8',
    'OutOfStock Clothes',
    'Required Chocolate 2',
    'JustInCase Hat',
    'OutOfStock Cable',
    'No Money'
]);