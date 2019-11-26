function solve(arr) {
    let str = arr.shift();

    for (const token of arr) {

        let command = token.split(' ');
        let action = command[0];

        if (action === 'Translate') {
            let char = command[1];
            let replacement = command[2];
            
            while (str.includes(char)) {
                str = str.replace(char, replacement);
            }
            console.log(str);
            
        } else if (action === 'Includes'){
            let searchedStr = command[1];
            str.includes(searchedStr) ? console.log('True') : console.log('False');
        } else if (action === 'Start') {
            let checkedStr = command[1];
            str.startsWith(checkedStr) ? console.log('True') : console.log('False');
        } else if (action === 'Lowercase') {
            str = str.toLowerCase()
            console.log(str);
        } else if (action === 'FindIndex') {
            let char = command[1];
            console.log(str.lastIndexOf(char));
        } else if (action === 'Remove') {
            let startInedx = Number(command[1]);
            let count = Number(command[2]);
            str = str.split('');
            str.splice(startInedx, count);
            console.log(str.join(''));
        } 
    }
}

solve([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End'
]);