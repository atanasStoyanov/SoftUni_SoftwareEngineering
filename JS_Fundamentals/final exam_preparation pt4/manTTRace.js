function solve(arr) {

    function decryption(char, num) {
        char = String.fromCharCode(char.charCodeAt() + Number(num));
        return char;
    }

    for (const message of arr) {
        let pattern = /^([#\$%\*&])(?<name>[A-Za-z]+)\1=(?<codeLength>[0-9]+)!!(?<code>.+)$/g;

        let match = pattern.exec(message);

        if (match) {
            let { name, codeLength, code } = match.groups;

            if (Number(codeLength) === code.length) {
                code = code
                    .split('')
                    .map(char => decryption(char, codeLength))
                    .join('');

                console.log(`Coordinates found! ${name} -> ${code}`);

            } else {
                console.log('Nothing found!');
            }

        } else {
            console.log('Nothing found!');
        }
    }
}

solve([
    "Ian6Hutchinson=7!!\(58ycb4",
    "#MikeHailwood#!!'gfzxgu6768=11",
    "slop%16!!plkdek/.8x11ddkc",
    "$Steve$=9Hhffjh",
    "*DavMolyneux*=15!!efgk#'_$&UYV%h%",
    "RichardQ^uayle=16!!fr5de5kd"
]);