function solve(firstString, char, secondString) {
    let replacedString = firstString.replace('_', char);
    
    if (replacedString === secondString) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

solve('Str_ng', 'I', 'Strong');