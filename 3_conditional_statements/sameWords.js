function sameWords(input){
    let word1 = input[0];
    let word2 = input[1];

    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();

    if (word1 == word2){
        console.log('yes')
    }else {
        console.log('no')
    }
}

sameWords(['nasko', 'Nasko'])