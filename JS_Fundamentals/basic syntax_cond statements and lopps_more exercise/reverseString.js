function solve(str) {
    let reversedString = [];

    for (let i = 0; i < str.length; i++) {
        reversedString.push(str[i]);        
    }

    reversedString = reversedString.reverse();

    console.log(reversedString.join(''));
}

solve('SoftUni');