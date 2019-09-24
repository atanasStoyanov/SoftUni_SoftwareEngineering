function spaceShip(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());
    let averageHeightOfAustronauts = Number(input.shift());

    let spaceShipVolume = width * length * height;
    let roomVolume = 2 * 2 * (averageHeightOfAustronauts + 0.40);
    let capacity = Math.floor(spaceShipVolume / roomVolume);

    if (capacity >= 3 && capacity <= 10) {
        console.log(`The spacecraft holds ${capacity} astronauts.`);
    } else if (capacity < 3) {
        console.log('The spacecraft is too small.');
    } else {
        console.log('The spacecraft is too big.');
    }
}

spaceShip([3, 3, 4, 1.68]);