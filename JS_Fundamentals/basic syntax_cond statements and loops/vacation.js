function vacation (groupSize, type, day) {
    let priceForPerson = 0;
    switch (type) {
        case 'Students':
            if (day === 'Friday') {
                priceForPerson = 8.45;
            } else if (day === 'Saturday'){
                priceForPerson = 9.80;
            } else {
                priceForPerson = 10.46;
            }
            break;
        case 'Business':
            if (day === 'Friday') {
                priceForPerson = 10.90;
            } else if (day === 'Saturday'){
                priceForPerson = 15.60;
            } else {
                priceForPerson = 16;
            }
            if (groupSize >= 100){
                groupSize -= 10;
            }
            break;
        case 'Regular':
            if (day === 'Friday') {
                priceForPerson = 15;
            } else if (day === 'Saturday'){
                priceForPerson = 20;
            } else {
                priceForPerson = 22.50;
            }
            break;
    }

    let totalPrice = priceForPerson * groupSize;

    if (type === 'Students' && groupSize >= 30) {
        totalPrice *= 0.85;
    } else if (type === 'Regular'  && (groupSize >= 10 && groupSize <= 20)){
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(100,'Business','Saturday')