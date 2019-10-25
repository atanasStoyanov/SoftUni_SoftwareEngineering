function solve(str) {
    let obj = JSON.parse(str);

    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
        
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');