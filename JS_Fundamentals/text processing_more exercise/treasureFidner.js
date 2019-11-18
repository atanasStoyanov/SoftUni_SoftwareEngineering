function solve(arr) {
    let key = arr.shift().split(' ').map(Number);
    let message = arr.shift();

    while (message !== 'find') {
        message = message.split('');
        let output = [];
        let keyIndex = 0;

        for (let i = 0; i < message.length; i++) {

            if (keyIndex >= key.length) {
                keyIndex = 0;
            }

            let newChar = message[i].charCodeAt() - key[keyIndex];
            output.push(String.fromCharCode(newChar))
            keyIndex++;
        }

        output = output.join('');

        console.log(`Found ${output.substring(output.indexOf('&') + 1, output.lastIndexOf('&'))} at ${output.substring(output.indexOf('<') + 1, output.indexOf('>'))}`);

        message = arr.shift();
    }
    
}

solve([
    "1 2 1 3",
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    "find"
]);