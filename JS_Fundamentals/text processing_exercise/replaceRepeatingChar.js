function solve(str) {
    let output = str[0];
    for (let i = 0; i < str.length - 1; i++) {
        let char = str[i];
        let nextChar = str[i + 1];
        
        if (nextChar !== char) {
            output += nextChar;
        }
    }
    
    console.log(output);
    
}

solve('aaaaabbbbbcdddeeeedssaa');