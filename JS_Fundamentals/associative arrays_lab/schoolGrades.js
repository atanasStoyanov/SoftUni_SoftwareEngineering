function solve(arr) {
    let schoolGrades = new Map();

    arr = arr.map(a => {
        let [student, ...grades] = a.split(' ');
        grades = grades.map(Number);

        if (schoolGrades.has(student)) {
            grades = schoolGrades.get(student).concat(grades);
        }
        schoolGrades.set(student, grades);
    });

    const avg = gradesArr => gradesArr.reduce((a, b) => a + b, 0) / gradesArr.length;
    let schoolGradesArr = Array.from(schoolGrades)
        .sort((a, b) => avg(a[1]) - avg(b[1]))
        .map(a => console.log(`${a[0]}: ${a[1].join(', ')}`));
}

solve([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);