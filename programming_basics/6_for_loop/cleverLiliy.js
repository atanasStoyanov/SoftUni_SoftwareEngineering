function cleverLily (input) {
    let age = Number(input[0]);
    let washingmachinePrice = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let sumMoney = 0;
    let toysNumber = 0;
    let brothersMoney =0;
    let evenYearsCounter = 0; 

    for(let index = 1; index <= age; index++){
        if (index % 2 == 0){
            evenYearsCounter++
            sumMoney = sumMoney + evenYearsCounter * 10;
            brothersMoney++
        }else{
            toysNumber++;
        }
    }

    sumMoney = sumMoney + (toysNumber * pricePerToy) - brothersMoney;

    let diff = Math.abs(sumMoney - washingmachinePrice)

    if(sumMoney >= washingmachinePrice){
        console.log(`Yes! ${diff.toFixed(2)}`)
    }else{
        console.log(`No! ${diff.toFixed(2)}`)
    }
}

cleverLily([21,1570.98,3])