function repainting(input) {
    let cover = Number(input.shift());
    let paint = Number(input.shift());
    let bizir = Number(input.shift());
    let workingHours = Number(input.shift());

    cover += 2;
    paint *= 1.1;
    
    let sum = cover * 1.50 + paint * 14.50 + bizir * 5 + 0.40;
    let painterPerHour = sum * 0.30;
    let totalSum = sum + painterPerHour * workingHours;

    console.log(`Total expenses: ${totalSum.toFixed(2)} lv.`);
}
repainting([90, 99,28, 9]);