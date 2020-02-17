function solve() {
    let resultRef = document.getElementById('result');
    let [stringInput, method] = document.getElementById('string').value.split(', ');

    let nameReg = /[A-Z][A-Za-z]*-[A-Z][A-Za-z]*( |\.-[A-Z][A-Za-z]* )/gm;
    let airportReg = / [A-Z]{3}\/[A-Z]{3} /gm;
    let flightNumberReg = / [A-Z]{1,3}[\d]{1,5} /gm;
    let companyReg = /- [A-Z][A-Za-z]*\*[A-Z][A-Za-z]* /gm;

    let funcObj = {
        'name': () => `Mr/Ms, ${stringInput.match(nameReg)[0].trim().replace(/-/g, ' ')}, have a nice flight!`,
        'flight': () => {
            let [from, to] = stringInput.match(airportReg)[0].trim().split('/');
            return `Your flight number ${stringInput.match(flightNumberReg)[0].trim()} is from ${from} to ${to}.`;
        },
        'company': () => `Have a nice flight with ${stringInput.match(companyReg)[0].trim().replace('- ', '').replace('*', ' ')}.`,
        'all': () => {
            let temp = stringInput.match(airportReg);
            let [from, to] = stringInput.match(airportReg)[0].trim().split('/');
            return `Mr/Ms, ${stringInput.match(nameReg)[0].trim().replace(/-/g, ' ')}, your flight number ${stringInput.match(flightNumberReg)[0].trim()} is from ${from} to ${to}. Have a nice flight with ${stringInput.match(companyReg)[0].trim().replace('- ', '').replace('*', ' ')}.`;
        }
    }

    resultRef.innerText = funcObj[method.trim()]();
}