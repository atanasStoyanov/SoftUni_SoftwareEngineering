function solve(inputStr) {
    
    return inputStr
        .match(/\w+/gi)
        .map(word => word.toUpperCase())
        .join(', ');
}

console.log(solve('Hi, how are you?'));
