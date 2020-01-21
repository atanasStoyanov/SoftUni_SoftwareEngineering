function solve(data) {

    let output = '<table>\n';

    data.map(employeeData => {
        output += '       <tr>\n';
        let employeeDataObj = JSON.parse(employeeData);
        Object.keys(employeeDataObj)
            .map(key => output += `              <td>${employeeDataObj[key]}</td>\n`);

        output += '       </tr>\n';
    })

    output += '</table>\n';

    return output;
}

console.log(solve([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]));
