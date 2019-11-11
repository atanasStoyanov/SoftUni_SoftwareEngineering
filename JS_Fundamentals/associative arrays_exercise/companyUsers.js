function solve(arr) {

    let companyUsers = arr.reduce((objAgr, employeeInfo) => {
        let [company, emplID] = employeeInfo.split(' -> ');

        if (objAgr.hasOwnProperty(company)) {
            objAgr[company] += `${emplID} `;
        } else {
            objAgr[company] = `${emplID} `;
        }

        return objAgr
    }, {});

    function onlyUniqueUsers(user, index, self) {
        return self.indexOf(user) === index;
    }

    let sorted = Object.keys(companyUsers)
        .sort((a, b) => a.localeCompare(b))
        .map(company => {
            let users = companyUsers[company]
                .trim()
                .split(' ')
                .filter(onlyUniqueUsers)
                .map(a => '-- ' + a);

            console.log(company);
            console.log(users.join('\n'));
        })

}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);