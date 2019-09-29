function solve(char) {
    
    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}

solve('L')