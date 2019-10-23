function solve(arr) {
    let treasureChest = arr
        .shift()
        .split('|');

    let actions = {
        'Loot': function (itemsArr, chest) {
            itemsArr = itemsArr.filter(a => !chest.includes(a)).map(a => chest.unshift(a));
            return chest;
        },
        'Drop': (index, chest) => { Number(index) <= chest.length ? 
            chest.push(chest.splice(Number(index), 1).join('')) : 
            chest = chest;
        },
        'Steal' : (count, chest) => { Number(count) < chest.length ? 
            console.log(chest.splice(chest.length - count, count).join(', ')) : 
            console.log(chest.splice(0).join(', '));
            },
        'printAvgGain' : (arrSum, arr) => {arrSum > 0 ? 
            console.log(`Average treasure gain: ${(arrSum / arr.length).toFixed(2)} pirate credits.`) : 
            console.log('Failed treasure hunt.');
        }
    }

    for (let i = 0; i < arr.length - 1; i++) {
        let [action, ...items] = arr[i].split(' ');

        actions[action](items, treasureChest);
    }

    let credits = treasureChest
        .join('')
        .length;

    actions.printAvgGain(credits, treasureChest);
}

solve([
    'Gold|Silver|Bronze|Medallion|Cup',
    'Loot Wood Gold Coins',
    'Loot Silver Pistol',
    'Drop 3',
    'Steal 3',
    'Yohoho!']);