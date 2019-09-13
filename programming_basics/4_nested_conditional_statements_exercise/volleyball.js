function volleyball (input){
    let year = input[0];
    let holidays = Number(input[1]);
    let weekendsInHome = Number(input[2]);
    const weekends = 48;

    let playsInSofia = (weekends - weekendsInHome) * (3.0/4);
    let playsInHolidays = holidays * (2.0/3);
    let sumPlays = playsInHolidays + playsInSofia + weekendsInHome;

    if (year == 'leap') {
        sumPlays = sumPlays + sumPlays * 0.15;
        console.log(Math.floor(sumPlays));
    } else {
        console.log(Math.floor(sumPlays));
    }
}

volleyball(['leap', '2', '3'])