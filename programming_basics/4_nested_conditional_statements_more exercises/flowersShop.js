function flowersShop (input) {
    let chrysanthemumNumber = Number(input[0]);
    let rosesNumber = Number(input[1]);
    let tulipsNumber = Number(input[2]);
    let season = input[3];
    let isHoliday = input[4];
    let chrysanthemumPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;

    if (isHoliday == 'Y') {
        
        if (season == 'Spring' || season == "Summer") {
            chrysanthemumPrice = chrysanthemumNumber * (2.00 + 2.00 * 0.15) ;
            rosesPrice = rosesNumber * (4.10 + 4.10 * 0.15);
            tulipsPrice = tulipsNumber * (2.50 + 2.50 * 0.15);
        } else {
            chrysanthemumPrice = chrysanthemumNumber * (3.75 + 3.75 * 0.15);
            rosesPrice = rosesNumber * (4.50 + 4.50 * 0.15);
            tulipsPrice = tulipsNumber * (4.15 + 4.15 * 0.15);
        }

    } else {
        if (season == 'Spring' || season == "Summer") {
            chrysanthemumPrice = chrysanthemumNumber * 2.00;
            rosesPrice = rosesNumber * 4.10;
            tulipsPrice = tulipsNumber * 2.50;
        } else {
            chrysanthemumPrice = chrysanthemumNumber * 3.75;
            rosesPrice = rosesNumber * 4.50;
            tulipsPrice = tulipsNumber * 4.15;
        }
    }

    let bouquetPrice = chrysanthemumPrice + rosesPrice + tulipsPrice;

    if (tulipsNumber > 7 && season == 'Spring') {
        bouquetPrice = bouquetPrice - bouquetPrice * 0.05;
    }
    if (rosesNumber >= 10 && season == 'Winter') {
        bouquetPrice = bouquetPrice - bouquetPrice * 0.10;
    }
    if (chrysanthemumNumber + rosesNumber + tulipsNumber > 20) {
        bouquetPrice = bouquetPrice - bouquetPrice * 0.20;
    }

    bouquetPrice += 2;

    console.log(bouquetPrice.toFixed(2));
}

flowersShop([3,10,9,'Winter','N'])