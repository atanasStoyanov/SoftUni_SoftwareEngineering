function cinema (input) {
    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let income = 0;

    if (type == 'Premiere') {
        income = rows * columns * 12.00;
    } else if (type == 'Normal') {
        income = rows * columns * 7.50;
    } else {
        income = rows * columns * 5.00;
    }

    console.log(`${income.toFixed(2)} leva`);
}   
cinema(['Normal', '21', '13'])