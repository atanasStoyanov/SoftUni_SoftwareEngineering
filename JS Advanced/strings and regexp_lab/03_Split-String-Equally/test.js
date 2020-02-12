function splitString(str, num) {
    let remainder = str.length % num;
    let result = str + str.substring(0, remainder);

    let output = '';

    for (let i = 0; i < result.length; i += num) {
        let group = result.substring(i, i + num);
        output += `${group} `;
        console.log(group);

    }

    console.log(output);

}

splitString('Test', 8);