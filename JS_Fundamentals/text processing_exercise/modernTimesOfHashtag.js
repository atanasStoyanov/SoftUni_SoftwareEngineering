function solve(str) {
    let format = /#[A-Za-z]+/g;
    str
        .split(' ')
        .filter(w => w.match(format))
        .map(w => console.log(w.replace('#', '')));
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');