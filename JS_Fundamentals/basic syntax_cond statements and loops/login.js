function login (input) {
    let username = input.shift();
    let reversedUsername = '';

    for (let i = username.length - 1; i >= 0; i--) {
        reversedUsername += username[i];
    }
    let currentTry = input.shift()
    let trysCounter = 0;
    while (currentTry !== reversedUsername){
        trysCounter++;
        if (trysCounter == 4) {
            console.log(`User ${username} blocked!`);
            break;
        } else {
            console.log('Incorrect password. Try again.');
            currentTry = input.shift();
        }
    }
    if (currentTry === reversedUsername) {
        console.log(`User ${username} logged in.`);
    }
}

login(['sunny','rainy','cloudy','sunny','not sunny'])