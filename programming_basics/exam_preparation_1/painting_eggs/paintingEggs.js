function paintingEggs (input) {
    let size = input[0];
    let color = input[1];
    let num = Number(input[2]);
    let income = 0;

    if (size === 'Large') {
        
        if (color === 'Red') {
            income = num * 16;
        } else if (color === 'Green') {
            income = num * 12;
        } else {
            income = num * 9;
        }

    } else if (size === 'Medium') {

        if (color === 'Red') {
            income = num * 13;
        } else if (color === 'Green') {
            income = num * 9;
        } else {
            income = num * 7;
        }

    } else {
        
        if (color === 'Red') {
            income = num * 9;
        } else if (color === 'Green') {
            income = num * 8;
        } else {
            income = num * 5;
        }
    }

    let profit = income * 0.65;
    console.log(`${profit.toFixed(2)} leva.`);
}

paintingEggs(['Large', "Red", 7]);