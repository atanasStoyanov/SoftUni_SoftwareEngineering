function seaTrip(input) {
    let moneyForFoodPerDay = Number(input.shift());
    let moneyForSouveniersPerDay = Number(input.shift());
    let moneyForHotelPerDay = Number(input.shift());

    let neededFuel = (210 + 210) / 100 * 7;
    let moenyForFuel = neededFuel * 1.85;
    let moneyForFood = moneyForFoodPerDay * 3;
    let moneyForSouveniers = moneyForSouveniersPerDay * 3;
    let hotelMoneyFirstDay = moneyForHotelPerDay * 0.90;
    let hotelMoneySecondDAy = moneyForHotelPerDay * 0.85;
    let hotelMoneyThirdDay = moneyForHotelPerDay * 0.80;

    let totalMoney = moenyForFuel + moneyForFood + moneyForSouveniers + hotelMoneyFirstDay + hotelMoneySecondDAy + hotelMoneyThirdDay;

    console.log(`Money needed: ${totalMoney.toFixed(2)}`);
}
seaTrip([200, 200, 1000]);