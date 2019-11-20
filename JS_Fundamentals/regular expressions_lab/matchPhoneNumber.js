function solve(str) {
    let pattern =/\+359[ -][2][ -][0-9]{3}[ -][0-9]{4}\b/g;
    let validPhones = [];
    let validPhone = null;

    while ((validPhone = pattern.exec(str)) !== null) {
        validPhones.push(validPhone[0])
    }
    
    console.log(validPhones.join(', '));
    
}

solve("359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222");