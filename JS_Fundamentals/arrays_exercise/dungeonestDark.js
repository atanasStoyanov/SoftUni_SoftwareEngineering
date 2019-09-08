function dungeonestDark (input) {
    let arr = input[0].split('|');
    let initialHealth = 100;
    let initialCoins = 0

    for (let room = 0; room < arr.length; room++) {
        let currentRoom = arr[room];
        let arrRoom = currentRoom.split(' ');
        let itemOrMonster = arrRoom[0];
        let num = Number(arrRoom[1]);
        let addedHealth = 0;
        
        if (itemOrMonster === 'potion'){
            if (initialHealth + num <= 100){
                addedHealth = num;
                initialHealth += num;
            } else {
                initialHealth += num;
                addedHealth = num - (initialHealth - 100)
                initialHealth = 100;
            }
            console.log(`You healed for ${addedHealth} hp.`);
            console.log(`Current health: ${initialHealth} hp.`);
        } else if (itemOrMonster === 'chest'){
            initialCoins += num;
            console.log(`You found ${num} coins.`);
        } else {
            initialHealth -= num;
            if (initialHealth > 0){
                console.log(`You slayed ${itemOrMonster}.`);
            } else {
                console.log(`You died! Killed by ${itemOrMonster}.`);
                console.log(`Best room: ${room + 1}`);
                break;
            }
        }
    }
    if (initialHealth > 0){
        console.log(`You've made it!`);
        console.log(`Coins: ${initialCoins}`);
        console.log(`Health: ${initialHealth}`);
    }
}

dungeonestDark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])