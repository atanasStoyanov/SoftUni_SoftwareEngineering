function timePlus15(input){
    let startHours = Number(input[0]);
    let startMinutes = Number(input[1]);

    let newMinutes = startMinutes + 15;

    if (newMinutes >= 60){
        startHours += 1;
        newMinutes -= 60;
    }
    if (startHours >=24){
        startHours -=24;
    }

    if (newMinutes < 10){
        console.log(`${startHours}:0${newMinutes}`)
    }else{
        console.log(`${startHours}:${newMinutes}`)
    }

}

timePlus15(['0','01'])