function easterBake (input) {
    let easterBreadsNum = Number(input.shift());
    let sugarSum = 0;
    let flourSum = 0;
    let sugarMax = Number.MIN_SAFE_INTEGER;
    let flourMax = Number.MIN_SAFE_INTEGER;

    for (let index = 1; index <= easterBreadsNum; index++) {
        let sugar = Number(input.shift());
        let flour = Number(input.shift());
        sugarSum += sugar;
        flourSum += flour;

        if (sugar > sugarMax) {
            sugarMax = sugar;
        }
        
        if (flour > flourMax) {
            flourMax = flour;
        }
    }

    let packsOfSugar = Math.ceil(sugarSum / 950);
    let packsOfFlour = Math.ceil(flourSum / 750);

    console.log(`Sugar: ${packsOfSugar}`);
    console.log(`Flour: ${packsOfFlour}`);
    console.log(`Max used flour is ${flourMax} grams, max used sugar is ${sugarMax} grams.`);
}

easterBake([3,400,350,250,300,450,380])