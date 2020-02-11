function solve(str, type) {

    function stringToPascalCase(str) {
        return str
            .split(' ')
            .map(w => w.toLowerCase())
            

    }

    return stringToPascalCase(str);


}

console.log(solve('Test test1 tEsT2'));
