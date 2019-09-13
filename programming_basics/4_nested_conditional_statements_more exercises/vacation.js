function vacation (input) {
    let budget = Number(input[0]);
    let season = input[1];
    let accomodation = '';
    let location = '';
    let vacationPrice = 0;

    if (budget <= 1000) {
        accomodation = 'Camp';

        if (season == 'Summer') {
            location = 'Alaska';
            vacationPrice = budget * 0.65;
        } else {
            location = 'Morocco';
            vacationPrice = budget * 0.45;
        }

    } else if (budget <= 3000) {
        accomodation = 'Hut';

        if (season == 'Summer') {
            location = 'Alaska';
            vacationPrice = budget * 0.80;
        } else {
            location = 'Morocco';
            vacationPrice = budget * 0.60;
        }

    } else {
        accomodation = 'Hotel';
        vacationPrice = budget * 0.90;

        if (season == 'Summer') {
            location = 'Alaska';
        } else {
            location = 'Morocco';
        }
    }
    console.log(`${location} - ${accomodation} - ${vacationPrice.toFixed(2)}`);
}

vacation([3460, 'Summer'])