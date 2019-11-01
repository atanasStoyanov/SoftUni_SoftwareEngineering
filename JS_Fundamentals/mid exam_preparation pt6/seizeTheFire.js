function solve(arr) {
    let effort = 0;
    let firePuttedOut = 0;
    let water = Number(arr.pop());
    let fireCells = arr.shift().split('#');
    let puttedOutCells = [];

    function putOut(lvl) {
        if (water >= lvl) {
            water -= lvl;
            effort += lvl * 0.25;
            firePuttedOut += lvl;
            puttedOutCells.push(lvl);
        }
    }

    fireCells.map(a => {
        let [type, level] = a.split(' = ');
        level = Number(level);

        if (type === 'Low' && (level >= 1 && level <= 50)) {
            putOut(level);
        } else if (type === 'Medium' && (level >= 51 && level <= 80)) {
            putOut(level);
        } else if (type === 'High' && (level >= 81 && level <= 125)) {
            putOut(level);
        }
    });

    console.log('Cells:');
    puttedOutCells.map(a => console.log(` - ${a}`));
    console.log(`Effort: ${effort.toFixed(2)}`);
    console.log(`Total Fire: ${firePuttedOut}`);

}

solve(['High = 150#Low = 55#Medium = 86#Low = 40#High = 110#Medium = 77', 220])