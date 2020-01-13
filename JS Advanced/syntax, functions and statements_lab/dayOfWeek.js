function solve(input) {
    let daysMap = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday:': 5,
        'Saturday': 6,
        'Sunday': 7
    }

    return daysMap.hasOwnProperty(input) ? daysMap[input] : 'error'
}

console.log(solve('dsada'));
