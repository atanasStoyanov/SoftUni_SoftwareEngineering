function solve(year, month, day) {
    let newDay = day + 1; 

    if (year < 1900) {
        year += 1900
    }

    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {

        if (newDay > 31) {
            newDay = 1;
            month += 1;
        }
    } else if (month === 2) {

        if (year % 4 === 0 && newDay > 29) {
            newDay = 1;
            month += 1;
        } else if (year % 4 !== 0 && newDay > 28) {
            newDay = 1;
            month += 1;
        }
    } else {

        if (newDay > 30) {
            newDay = 1;
            month += 1;
        }
    }

    if (month > 12 ) {
        month = 1;
        year += 1;
    }

    console.log(`${year}-${month}-${newDay}`);
    
}
solve(1, 1, 1)