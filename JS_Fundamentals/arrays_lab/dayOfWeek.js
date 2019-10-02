function solve(num) {
    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (num >= 1 && num <= 7) {
        console.log(daysOfWeek[num - 1]);
    } else {
        console.log('Invalid day!');
    }
}

solve(1);