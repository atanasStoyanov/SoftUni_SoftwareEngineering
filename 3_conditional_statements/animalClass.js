function animalClass(input){
    let animal = input[0];

    switch(animal){
        case "dog":{
            console.log('mammal');
        }break;
        case "crocodile":
        case "tortoise":
        case "snake":{
            console.log('reptile');
        }break;
        case "cat": {
            console.log('unknown')
        }
    }  
}
animalClass(['cat'])