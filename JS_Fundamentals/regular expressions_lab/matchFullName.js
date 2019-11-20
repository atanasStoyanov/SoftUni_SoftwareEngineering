function solve(str) {
    let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
    let validNames = [];
    let validName = null;

    while ((validName = pattern.exec(str)) !== null) {
        validNames.push(validName[0]);
    }

    console.log(validNames.join(' '));
}

solve('ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan Ivanov');