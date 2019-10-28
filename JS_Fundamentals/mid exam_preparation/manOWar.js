function solve(arr) {
    let pirateShipStatus = arr.shift().split('>').map(Number);
    let warshipStatus = arr.shift().split('>').map(Number);
    let maxHealth = Number(arr.shift());
    let pirateShipSank = false;
    let warshipSank = false;

    function fire(attributesArr) {
        if (attributesArr[0] >= 0 && attributesArr[0] < warshipStatus.length) {
            warshipStatus[attributesArr[0]] -= attributesArr[1];
        }
    }

    function defend(attributesArr) {
        if ((attributesArr[0] >= 0 && attributesArr[0] < pirateShipStatus.length) && (attributesArr[1] >= 0 && attributesArr[1] < pirateShipStatus.length)) {
            for (let i = attributesArr[0]; i <= attributesArr[1]; i++) {
                pirateShipStatus[i] -= attributesArr[2];

                if (pirateShipStatus[i] <= 0) {
                    console.log('You lost! The pirate ship has sunken.');
                    pirateShipSank = true;
                    break;
                }
            }
        }
    }

    function repair(attributesArr) {
        if (attributesArr[0] >= 0 && attributesArr[0] < pirateShipStatus.length) {
            pirateShipStatus[attributesArr[0]] = Math.min(pirateShipStatus[attributesArr[0]] + attributesArr[1], maxHealth);
        }
    }

    for (let i = 0; i < arr.length - 1; i++) {
        let [action, ...attributes] = arr[i].split(' ');

        if (action === 'Fire') {
            fire(attributes)

            if (warshipStatus[attributes[0]] <= 0) {
                console.log('You won! The enemy ship has sunken.');
                warshipSank = true;
                break;
            }

        } else if (action === 'Defend') {
            defend(attributes);

            if (pirateShipSank === true) {
                break
            }

        } else if (action === 'Repair') {
            repair(attributes);

        } else if (action === 'Status') {
            let damagedSections = pirateShipStatus.filter(a => a < maxHealth * 0.20)
            console.log(`${damagedSections.length} sections need repair.`);
        }
    }

    warshipStatus = warshipStatus.reduce((a, b) => a + b);
    pirateShipStatus = pirateShipStatus.reduce((a, b) => a + b);

    if (pirateShipSank === false && warshipSank === false) {
        console.log(`Pirate ship status: ${pirateShipStatus}`);
        console.log(`Warship status: ${warshipStatus}`);
    }
}

solve(['2>3>4>5>2',
    '6>7>8>9>10>11',
    20,
    'Status',
    'Fire 2 3',
    'Defend 0 4 11',
    'Repair 3 18',
    'Retire',
]);