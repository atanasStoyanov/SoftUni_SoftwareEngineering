function solve(name, age, weight, height) {

    function BMICalculator(weight, heightCM) {

        return Math.round((weight / Math.pow(heightCM / 100, 2)));
    }

    function defineStatus(obj, bmi) {
        if (bmi < 18.5) {
            obj.status = 'underweight';
        } else if (bmi < 25) {
            obj.status = 'normal';
        } else if (bmi < 30) {
            obj.status = 'overweight';
        } else {
            obj.status = 'obese';
        }
    }

    function addRecommendation(obj, status) {
        if (status === 'obese') {
            obj.recommendation = 'admission required';
        }
    }

    let patientInfo = {
        name,
        'personalInfo': {
            age,
            weight,
            height
        },
        'BMI': BMICalculator(weight, height)
    }

    defineStatus(patientInfo, patientInfo.BMI);

    addRecommendation(patientInfo, patientInfo.status);

    return patientInfo;
}

console.log(solve('Peter', 29, 75, 182));
