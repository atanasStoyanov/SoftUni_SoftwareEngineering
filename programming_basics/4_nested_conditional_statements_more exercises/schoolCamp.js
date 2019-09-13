function schoolCamp(input) {
    let season = input[0];
    let groupType = input[1];
    let studentsNumber = Number(input[2]);
    let nightsNumber = Number(input[3]);
    let price = 0;
    let sport = '';

    if (season == 'Winter') {

        if (groupType == 'boys') {
            price = studentsNumber * nightsNumber * 9.60;
            sport = 'Judo';
        } else if (groupType == 'girls') {
            price = studentsNumber * nightsNumber * 9.60;
            sport = 'Gymnastics';
        } else {
            price = studentsNumber * nightsNumber * 10;
            sport = 'Ski';
        }

    } else if (season == 'Spring') {

        if (groupType == 'boys') {
            price = studentsNumber * nightsNumber * 7.20;
            sport = 'Tennis';
        } else if (groupType == 'girls') {
            price = studentsNumber * nightsNumber * 7.20;
            sport = 'Athletics';
        } else {
            price = studentsNumber * nightsNumber * 9.50;
            sport = 'Cycling';
        }

    } else {

        if (groupType == 'boys') {
            price = studentsNumber * nightsNumber * 15;
            sport = 'Football';
        } else if (groupType == 'girls') {
            price = studentsNumber * nightsNumber * 15;
            sport = 'Volleyball';
        } else {
            price = studentsNumber * nightsNumber * 20;
            sport = 'Swimming';
        }
    }
    
    if (studentsNumber >= 50) {
        price = price * 0.50;
    } else if (studentsNumber >= 20) {
        price = price * 0.85;
    } else if (studentsNumber >= 10) {
        price = price * 0.95;
    }
    console.log(`${sport} ${price.toFixed(2)} lv.`);
}

schoolCamp(['Winter', 'mixed', 9, 15])