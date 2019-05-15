function nameWars(input) {
    let maxSum = -1;
    let winnerName = '';

    while (true){
        let name = input.shift();
        if (name == 'STOP'){
            break;
        }
        let sum = 0;
        for (let index = 0; index < name.length; index++) {
            let currentLetter = name[index].charCodeAt();
            sum += currentLetter;
        }
        if (sum > maxSum){
            maxSum = sum;
            winnerName = name;
        }
    }
    console.log(`Winner is ${winnerName} - ${maxSum}!`)
}

nameWars(['Petar','Georgi','Stanimir','STOP'])