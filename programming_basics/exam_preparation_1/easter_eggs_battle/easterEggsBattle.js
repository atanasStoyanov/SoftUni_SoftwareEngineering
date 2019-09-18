function easterEggsBattle (input) {
    let firstPlayerEggs = Number(input.shift());
    let secondPlayerEggs = Number(input.shift());

    while (true) {

        if (firstPlayerEggs === 0 || secondPlayerEggs === 0) {
            break;
        }

        let command = input.shift();

        if (command === 'End of battle') {
            break;
        } else if (command === 'one') {
            secondPlayerEggs--;
        } else {
            firstPlayerEggs--;
        }
    }

    if (firstPlayerEggs === 0) {
        console.log(`Player one is out of eggs. Player two has ${secondPlayerEggs} eggs left.`);
    } else if (secondPlayerEggs === 0) {
        console.log(`Player two is out of eggs. Player one has ${firstPlayerEggs} eggs left.`);
    } else {
        console.log(`Player one has ${firstPlayerEggs} eggs left.`);
        console.log(`Player two has ${secondPlayerEggs} eggs left.`);
    }
}

easterEggsBattle([6, 3, 'one', 'two', 'two','one','one']);