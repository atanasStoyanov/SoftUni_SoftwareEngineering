function scholarship(input){
    let income = Number(input[0]);
    let score = Number(input[1]);
    let salary = Number(input[2]);

    let social = 0;
    let excellent = 0;

    if (income < salary && score > 4.50){
        social = salary * 0.35;
    }

    if (score >= 5.50){
        excellent = score * 25;
    }

    if ((social > excellent) && social != 0){
        console.log(`You get a Social scholarship ${Math.floor(social)} BGN`);
    } else if ((social <= excellent) && excellent != 0){
        console.log(`You get a scholarship for excellent results ${Math.floor(excellent)} BGN`);
    } else {
        console.log(`You cannot get a scholarship!`);
    }
}
scholarship(['419.00', '5.60', '420.00'])