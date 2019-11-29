function solve(arr) {
    let end = arr.pop();

    function encryption(char, num) {

        if (char !== " " && char !== "'" && char !== '@') {
            char = char.charCodeAt();

            for (let i = 0; i < num; i++) {
                char++;

                if (char === 91) {
                    char = 65;
                }

                if (char === 123) {
                    char = 97;
                }
            }

            char = String.fromCharCode(char);

        } 

        return char;

    }

    for (let song of arr) {
        let pattern = /^(?<artist>[A-Z][\s?\'?a-z]+):(?<song>[A-Z\s?]+)$/g;

        let matchedSong = pattern.exec(song);

        if (matchedSong) {
            let { artist } = matchedSong.groups;
            let key = artist.length;
            song = song
                .replace(':', '@')
                .split('')
                .map(a => encryption(a, key))
                .join('')

            console.log(`Successful encryption: ${song}`);
        } else {
            console.log('Invalid input!');
        }
    }
}

solve([
    "Eminem:VENOM",
    "Linkin park:NUMB",
    "Drake:NONSTOP",
    "Adele:HELLO",
    "end"
]);