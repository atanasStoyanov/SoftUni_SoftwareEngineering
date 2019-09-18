function easterShop (input) {
    let initialQuantity = Number(input.shift());
    let soldEggs = 0;
    let isClosed = false;

    while (initialQuantity >= 0) {
        let command = input.shift();

        if (command === 'Close'){
            isClosed = true;
            break;
        }

        let num = Number(input.shift());

        if (command === 'Fill') {
            initialQuantity += num;
        } else {

            if (initialQuantity < num) {
                console.log('Not enough eggs in store!');
                console.log(`You can buy only ${initialQuantity}.`);
                break;
            } else {
                initialQuantity -= num;
                soldEggs += num;
            }
        }   
    }

    if (isClosed) {
        console.log('Store is closed!');
        console.log(`${soldEggs} eggs sold.`);
    }
}
easterShop([20,'Fill',30,'Buy',15,'Buy',20, 'Close']);