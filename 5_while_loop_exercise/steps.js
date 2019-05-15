function healthySteps (input){
    const goal = 10000
    let steps = 0; 
    let isGoalReached = false;

    while(steps < goal){
       let currentSteps = input.shift();
        if(currentSteps == 'Going home'){
            let lastSteps = Number(input.shift());
            steps +=lastSteps
            break;
        }else{
            steps += Number(currentSteps);
        }
    }
    if(steps >= goal){
        isGoalReached = true;
    }
    let diff = Math.abs(goal - steps)
    if(isGoalReached == true){
        console.log('Goal reached! Good job!');
    }else{
        console.log(`${diff} more steps to reach goal.`)
    }
}

healthySteps([1500,300,2500,3000,'Going home',200])