function examPreparation (input) {
    let badGradesAllowed = Number(input.shift());
    let problem = input.shift();
    let avg = 0;
    let counter = 0; 
    let score = 0; 
    let badGrades = 0; 
    let badGradesLimit = false;
    let lastProblem = "";

    while (problem != 'Enough') {
      let grade = Number(input.shift());

      if (grade <= 4) {
          badGrades++;

          if (badGrades >= badGradesAllowed) {
              badGradesLimit = true;
              break;
          }
      }

      score += grade;
      counter++;
      lastProblem = problem;
      problem = input.shift();
    }

    avg = score / counter;

    if (badGradesLimit) {
        console.log(`You need a break, ${badGrades} poor grades.`);
    } else {
        console.log(`Average score: ${avg.toFixed(2)}`);
        console.log(`Number of problems: ${counter}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}

examPreparation([2, 'Income', 3, 'Game Info', 6, 'Best Player', 4])