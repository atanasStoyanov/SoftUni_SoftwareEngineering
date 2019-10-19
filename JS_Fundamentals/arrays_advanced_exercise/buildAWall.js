function solve(arr) {
    arr = arr.map(Number);
    arr = arr.filter(e => e < 30);
    let yardsPerDay = [];

    while (arr.length > 0) {
        yardsPerDay.push(arr.length * 195);
        arr = arr.map(e => e + 1).filter(e => e < 30);
    }

    console.log(yardsPerDay.join(', '));
    yardsPerDay = yardsPerDay.reduce((a, b) => a + b);
    console.log(`${yardsPerDay * 1900} pesos`);
    
}

solve([17, 22, 17, 19, 17]);