function graduation (input){
    let name = input.shift();
    let allGrades = 12;
    let counter = 1;
    let sum = 0;
    let excludet = 0;
    let isExcludet = false;
    
    while (counter <= allGrades) {
    let grade = Number(input.shift())
        if(grade >= 4){
            sum += grade;
            counter++ 
        }else{
            excludet++
            if(excludet > 1){
                isExcludet = true;
                break;
            }
        }
    }
    let avg = sum / allGrades
    if (isExcludet == false){
    console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`)
    }else{
        console.log(`${name} has been excluded at ${counter} grade`)
    }
}

graduation(['Mimi',5,6,5,6,5,6,6,2,3])