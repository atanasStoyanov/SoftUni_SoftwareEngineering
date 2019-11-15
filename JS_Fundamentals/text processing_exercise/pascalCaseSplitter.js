function solve(str) {
    console.log(str
        .split('')
        .map(letter => letter.match(/[A-Z]/) ? ' ' + letter : letter = letter)
        .join('')
        .trim()
        .split(' ')
        .join(', '))
    
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')