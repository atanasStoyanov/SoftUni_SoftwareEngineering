function graduation(input) {
    let name = input.shift();
    let classes = 12;
    let counter = 1; 
    let sumGrades = 0;

    while (counter <= classes) {
        let grade = Number(input.shift());

        if (grade >= 4) {
            sumGrades += grade;
            counter++;
        }
    }

    let avg = sumGrades / classes;

    console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`);
}

graduation(['Pesho',4,5.5,6,5.43,4.5,6,5.55,5,6,6,5.43,5])