function solve(str) {
    str = str.toLowerCase().split(' ')
    let materialIsObtained = false;
    let farmedMaterials = {
        'key': { 'shards': 0, 'fragments': 0, 'motes': 0 },
        'junk': {}
    }

    let legendaryItems = {
        'shards': 'Shadowmourne',
        'fragments': 'Valanyr',
        'motes': 'Dragonwrath'
    }

    for (let i = 0; i < str.length - 1; i += 2) {
        let quantity = Number(str[i]);
        let material = str[i + 1];

        if (material === 'shards' || material === 'fragments' || material === 'motes') {

            farmedMaterials.key[material] += quantity;

            Object.keys(farmedMaterials.key)
                .map(mat => {
                    if (farmedMaterials.key[mat] >= 250) {
                        console.log(`${legendaryItems[mat]} obtained!`);
                        farmedMaterials.key[mat] -= 250;
                        materialIsObtained = true;
                    }
                });

            if (materialIsObtained === true) {
                break;
            }

        } else {

            if (!farmedMaterials.junk.hasOwnProperty(material)) {
                farmedMaterials.junk[material] = quantity;
            } else {
                farmedMaterials.junk[material] += quantity;
            }
        }
    }

    Object.keys(farmedMaterials)
        .map(type => {
            if (type === 'key') {
                Object.keys(farmedMaterials[type])
                    .sort((a, b) => a.localeCompare(b))
                    .sort((a, b) => farmedMaterials[type][b] - farmedMaterials[type][a])
                    .map(mat => console.log(`${mat}: ${farmedMaterials[type][mat]}`))
            } else {
                Object.keys(farmedMaterials[type])
                    .sort((a, b) => a.localeCompare(b))
                    .map(mat => console.log(`${mat}: ${farmedMaterials[type][mat]}`))
            }
        })

}

solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');