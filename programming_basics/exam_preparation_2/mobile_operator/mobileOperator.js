function mobileOperator (input) {
    let duration = input[0];
    let type = input[1];
    let internet = input[2];
    let monthsToPay = Number(input[3]);

    let tax = 0;
    let internetPrice = 0;

    if (duration === 'one') {

        if (type === 'Small') {
            tax = 9.98;
        } else if (type === 'Middle') {
            tax = 18.99;
        } else if (type === 'Large') {
            tax = 25.98;
        } else {
            tax = 35.99;
        }

    } else {

        if (type === 'Small') {
            tax = 8.58;
        } else if (type === 'Middle') {
            tax = 17.09;
        } else if (type === 'Large') {
            tax = 23.59;
        } else {
            tax = 31.79;
        }

    }
    if (internet === 'yes') {

        if (tax <= 10.00) {
            internetPrice = 5.50;
        } else if (tax <= 30.00) {
            internetPrice = 4.35;
        } else {
            internetPrice = 3.85;
        }
    }

    let totalTax = tax + internetPrice;

    if (duration === 'two') {
        totalTax = totalTax - totalTax * 0.0375;
    }

    let finalPrice = totalTax * monthsToPay;

    console.log(`${finalPrice.toFixed(2)} lv.`);
}

mobileOperator(['two', 'Small', 'yes', 20]);