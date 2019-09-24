function travelAgency(input) {
    let city = input.shift();
    let pakageType = input.shift();
    let vip = input.shift();
    let days = Number(input.shift());

    let pricePetNight = 0;
    let validInput = true;
    let daysArePositive = true;

    if (days < 1) {
        console.log(`Days must be positive number!`);
        daysArePositive = false;
        validInput = false;
    } else if (days > 7) {
        days -= 1;
    }

    if (city === 'Bansko' || city === 'Borovets' && daysArePositive) {

        if (pakageType === 'withEquipment') {
            pricePetNight = 100;

            if (vip === 'yes') {
                pricePetNight *= 0.90;
            }

        } else if (pakageType === 'noEquipment') {
            pricePetNight = 80;

            if (vip === 'yes') {
                pricePetNight *= 0.95;
            }

        } else {
            console.log('Invalid input!"');
            validInput = false;
        }

    } else if (city === 'Varna' || city === 'Burgas' && daysArePositive) {

        if (pakageType === 'withBreakfast') {
            pricePetNight = 130;
        
            if (vip === 'yes') {
                pricePetNight *= 0.88;
            }
        
        } else if (pakageType === 'noBreakfast') {
            pricePetNight = 100;
        
            if (vip === 'yes') {
                pricePetNight *= 0.93;
            }
        
        } else {
            console.log('Invalid input!');
            validInput = false;
        }
    
    } else {
        console.log('Invalid input!');
        validInput = false;
    }

    if (validInput) {
        let totalPrice = pricePetNight * days;
        console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
    }
}
travelAgency(['Varna', 'withBreakfast', 'no', 0]);