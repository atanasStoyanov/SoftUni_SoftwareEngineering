function solve(arr) {
    let username = arr.shift();
    let password = username
        .split('')
        .reverse()
        .join('');
    
    let attempts = 0;

    for (const attempt of arr) {

        if (attempt === password) {
            console.log(`User ${username} logged in.`)
        } else {
            attempts++;

            if (attempts === 4) {
                console.log(`User ${username} blocked!`);
                break;
            }

            console.log('Incorrect password. Try again.');
        }
    }
}

solve(['sunny','rainy','cloudy','sunny','not sunny']);