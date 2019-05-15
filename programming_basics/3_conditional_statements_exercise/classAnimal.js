function classAnimal(input) {
    let animal = input[0];

    switch(animal){
        case "dog": 
        console.log('mammal');
        break;
        case "crocodile":
        case "tortoise":
        case "snake": 
        console.log('reptail');
        break;
        default: 
        console.log('unknowen');
        break;
    }
}

classAnimal(['dog'])