function solve(arr) {
    return arr
        .filter((el, i, self) => self.indexOf(el) === i)
        .sort((a, b) => a.length - b.length || a.localeCompare(b))
        .join('\n')
}

console.log(solve([
    'Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'
]));
