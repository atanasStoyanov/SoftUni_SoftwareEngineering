function solve(firstName, lastName, age) {
    let person = {};
    person['firstName'] = firstName;
    person['lastName'] = lastName;
    person['age'] = age;

    for (const key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}

solve("Peter", "Pan", "20");