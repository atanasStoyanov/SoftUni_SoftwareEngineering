function rounding (num, precision) {
    if (precision > 15) {
        precision = 15;
    }
    let round = parseFloat(num.toFixed(precision));
    
    console.log(round);
}

rounding(10.5, 3)

