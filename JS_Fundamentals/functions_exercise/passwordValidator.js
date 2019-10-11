function solve(str) {
    let symbols = true;
    let length = true;
    let digits = true;
    let digitsCounter = 0;

    if (str.length < 6 || str.length > 10) {
        console.log('Password must be between 6 and 10 characters');
        length = false;
    }

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        if ((char.charCodeAt() >= 48 && char.charCodeAt() <= 57) || (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) || (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) ) {
            symbols = true;
        } else {
            symbols = false;
            break;
        }
    }

    for (const char of str) {

        if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
            digitsCounter++;
        }
    }

    if (!symbols) {
        console.log('Password must consist only of letters and digits');
    }

    if (digitsCounter < 2) {
        console.log('Password must have at least 2 digits');
        digits = false;
    }

    if (length && symbols && digits) {
        console.log('Password is valid');
    }

}

solve('Pa$s$s');