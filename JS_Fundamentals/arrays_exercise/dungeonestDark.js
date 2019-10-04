function solve(str) {
    let rooms = str[0].split('|');
    let health = 100;
    let coins = 0;
    let dead = false;

    for (let i = 0; i < rooms.length; i++) {
        let [item, num] = rooms[i].split(' ');

        if (item === 'potion') {

            if (health + Number(num) > 100) {
                console.log(`You healed for ${100 - health} hp.`);
                health = 100;
            } else {
                health += Number(num);
                console.log(`You healed for ${num} hp.`);
            }

            console.log(`Current health: ${health} hp.`);
            
        } else if (item === 'chest') {
            coins += Number(num);
            console.log(`You found ${num} coins.`);
        } else {
            health -= Number(num);

            if (health > 0) {
                console.log(`You slayed ${item}.`);
            } else {
                console.log(`You died! Killed by ${item}.`);
                console.log(`Best room: ${i + 1}`);
                dead = true;
                break;
            }
        }
    }

    if (!dead) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

solve(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);