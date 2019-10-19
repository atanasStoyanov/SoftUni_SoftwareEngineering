function solve(arr) {
    let inventory = arr.shift().split(' ');
    let buy = (el) => inventory.includes(el) ? inventory = inventory : inventory.push(el);
    let trash = (el) => inventory.includes(el) ? inventory.splice(inventory.indexOf(el), 1) : inventory = inventory;
    let repair = (el) => inventory.includes(el) ? inventory.push(inventory.splice(inventory.indexOf(el), 1).join('')) : inventory = inventory;
    let upgrade = (elArr) => inventory.includes(elArr[0]) ? inventory.splice(inventory.indexOf(elArr[0]) + 1, 0, `${elArr[0]}:${elArr[1]}`) : inventory = inventory;

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');
        let action = command.shift();
        let element = command.shift();

        if (action === 'Buy') {
            buy(element);
        } else if (action === 'Trash') {
            trash(element);
        } else if (action === 'Repair') {
            repair(element);
        } else {
            upgrade(element.split('-'))
        }
    }

    console.log(inventory.join(' '));
    
}

solve(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']

);