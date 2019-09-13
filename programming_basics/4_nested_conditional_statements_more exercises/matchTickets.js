function matchTickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let peopleNumber = Number(input[2]);
    
    let moneyForTransport = 0;
    let ticketsPrice = 0;

    if (peopleNumber <= 4){
        moneyForTransport = budget * 0.75;
    } else if (peopleNumber <= 9){
        moneyForTransport = budget * 0.60;
    } else if (peopleNumber <= 24){
        moneyForTransport = budget * 0.50;
    } else if (peopleNumber <= 49){
        moneyForTransport = budget * 0.40;
    } else {
        moneyForTransport = budget * 0.25; 
    }

    if (category == 'VIP'){
        ticketsPrice = peopleNumber * 499.99;
    }else{
        ticketsPrice = peopleNumber * 249.99;
    }

    let diff =budget - (moneyForTransport + ticketsPrice)
    if (diff >= 0){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money! You need ${Math.abs(diff).toFixed(2)} leva.`);
    }
}

matchTickets([50000,'Normal',200])