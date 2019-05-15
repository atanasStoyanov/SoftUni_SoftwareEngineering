function guessPass(input){
    const realPass = "s3cr3t!P@ssw0rd"
    let pass = input[0];

    if (pass == realPass){
        console.log('Welcome')
    }else{
        console.log('Wrong password!')
    }
}

guessPass(['qwerty'])