function foodDelivery (input) {
    let chickenMenusNumber = Number(input[0]);
    let fishMenusNumber = Number(input[1]);
    let veganMenusNumber = Number(input[2]);

    let sumPrice = chickenMenusNumber * 10.35 + fishMenusNumber * 12.40 + veganMenusNumber * 8.15;
    let desertPrice = sumPrice * 0.20;
    let totalPrice = sumPrice + desertPrice + 2.50;

    console.log(`Total: ${totalPrice.toFixed(2)}`);
}

foodDelivery([10,0,6])