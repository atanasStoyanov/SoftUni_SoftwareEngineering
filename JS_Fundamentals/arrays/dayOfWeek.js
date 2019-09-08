function dayOfWeek (num) {
    
    let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (num > 0 && num <= 7){
        console.log(weekDays[num - 1]);
    } else {
        console.log('Invalid day!');
    }
}

dayOfWeek(1)