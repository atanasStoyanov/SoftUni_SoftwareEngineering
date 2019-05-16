function trainTheTrainers(input) {
    let gudges = Number(input.shift());
    let presentationName = input.shift();
    let sumPresentationScores = 0; 
    let presentationsNumber = 0;
    

    while (presentationName != 'Finish'){
        let presentationGradeSum = 0;
        let presentationScore = 0;
        for (let i = 0; i < gudges; i++) {
            let grade = Number(input.shift());
            presentationGradeSum += grade; 
        }
        presentationScore = presentationGradeSum / gudges
        console.log(`${presentationName} - ${presentationScore.toFixed(2)}.`);
        sumPresentationScores += presentationScore
        presentationsNumber++;
        presentationName = input.shift();
    }
    let finalAssessment = sumPresentationScores / presentationsNumber;
    console.log(`Student's final assessment is ${finalAssessment.toFixed(2)}.`);
}

trainTheTrainers([3,'Arrays',4.53,5.23,5.00,'Lists',5.83,6.00,5.42,'Finish'])