function solve(arr) {
    let treasureChest = arr
        .shift()
        .split('|');

    function loot(itemsArr, chest) {
        itemsArr = itemsArr.filter(a => !chest.includes(a)).map(a => chest.unshift(a));
        return treasureChest;
    }

    let drop = (index, chest) => Number(index) <= chest.length ? chest.push(chest.splice(Number(index), 1).join('')) : chest = chest;

    let steal = (count, chest) => Number(count) < chest.length ? console.log(chest.splice(chest.length - count, count).join(', ')) : console.log(chest.splice(0).join(', '))

    let printAvgGain = (arrSum, arr) => arrSum > 0 ? console.log(`Average treasure gain: ${(arrSum / arr.length).toFixed(2)} pirate credits.`) : console.log('Failed treasure hunt.');


    for (let i = 0; i < arr.length - 1; i++) {
        let command = arr[i].split(' ');
        let action = command.shift();

        if (action === 'Loot') {
            loot(command, treasureChest);
        } else if (action === 'Drop') {
            drop(command[0], treasureChest);
        } else {
            steal(command[0], treasureChest);
        }

    }

    let credits = treasureChest
        .join('')
        .length;

    printAvgGain(credits, treasureChest);
}

solve([
    'Gold|Silver|Bronze|Medallion|Cup',
    'Loot Wood Gold Coins',
    'Loot Silver Pistol',
    'Drop 3',
    'Steal 3',
    'Yohoho!']);