function cake (input) {
    let cakeWidth = Number(input.shift());
    let cakeHeight = Number(input.shift());
    let cakeSize = cakeWidth * cakeHeight;
    let eatenCake = 0; 
    let isCakeEaten = false;

    while (eatenCake <= cakeSize) {
        let pieces = input.shift();

        if (pieces === 'STOP') {

            if (eatenCake >= cakeSize) {
                isCakeEaten = true;
            }

            break;
        } else {
            pieces = Number(pieces);
            eatenCake +=pieces;
        }
    }

    if (eatenCake >= cakeSize) {
        isCakeEaten = true;
    }

    let diff = Math.abs(eatenCake - cakeSize);

    if (isCakeEaten) {
        console.log(`No more cake left! You need ${diff} pieces more.`);
    } else {
        console.log(`${diff} pieces are left.`);
    }
}

cake(['10','2','2','4','6','STOP'])