function solve(arr) {
    let treasureChest = arr
        .shift()
        .split('|');

    function loot(itemsArr) {
        
        for (let i = 0; i < itemsArr.length; i++) {
            let item = itemsArr[i];

            if (treasureChest.includes(item) === false) {
                treasureChest.unshift(item);
            }
        }

        return treasureChest;
    }

    function drop(index) {
        index = Number(index);
        if (index <= treasureChest.length) {
            treasureChest.push(treasureChest.splice(index, 1).join(''))
        }
    }
    
    function steal(count) {
        
        let stolenItems = '';
        count = Number(count);

        if (count < treasureChest.length) {
            stolenItems = treasureChest.splice(treasureChest.length - count, count);
            console.log(stolenItems.join(', '));
        } else {
            stolenItems = treasureChest.splice(0).join(', ');
            console.log(stolenItems);
        }

        return treasureChest;
    }

    let avg = (a, b) => a / b.length;


    for (let i = 0; i < arr.length - 1; i++) {
        let command = arr[i].split(' ');
        let action = command.shift();

        if (action === 'Loot') {
            loot(command);
        } else if (action === 'Drop') {
            drop(command[0]);
        } else {
            steal(command[0]);
        }

    }

    let credits = treasureChest
        .join('')
        .length;

    if (credits > 0) {
        console.log(`Average treasure gain: ${avg(credits, treasureChest).toFixed(2)} pirate credits.`);

    } else {
        console.log('Failed treasure hunt.');

    }
}

solve([
    'Gold|Silver|Bronze|Medallion|Cup',
    'Loot Wood Gold Coins',
    'Loot Silver Pistol',
    'Drop 3',
    'Steal 3',
    'Yohoho!']);