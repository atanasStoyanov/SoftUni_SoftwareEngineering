function snooker(input) {
    let stage = input.shift();
    let ticketType = input.shift();
    let ticketsQuantity = Number(input.shift());
    let picture = input.shift();
    let price = 0;

    if (stage === 'Quarter final') {

        if (ticketType === 'Standard') {
            price = 55.50;
        } else if (ticketType === 'Premium') {
            price = 105.20;
        } else {
            price = 118.90;
        }

    } else if (stage === 'Semi final') {

        if (ticketType === 'Standard') {
            price = 75.80;
        } else if (ticketType === 'Premium') {
            price = 125.22;
        } else {
            price = 300.40;
        }

    } else {
        
        if (ticketType === 'Standard') {
            price = 110.10;
        } else if (ticketType === 'Premium') {
            price = 160.66;
        } else {
            price = 400;
        }
    }
    
    let sum = ticketsQuantity * price;
    let freePicture = false;
    
    if (sum > 4000) {
        sum *= 0.75;
        freePicture = true;
    } else if (sum > 2500) {
        sum *= 0.90;
    }

    if (picture === 'Y' && !freePicture) {
        sum += ticketsQuantity * 40;
    }

    console.log(sum.toFixed(2));
}
snooker(['Quarter final', 'Standard', 11, 'N']);
