function cookieFactory(input) {
    let n = Number(input.shift());

    for (let index = 1; index <= n; index++) {
        let product = input.shift()
        let flour = false;
        let sugar = false;
        let eggs = false;

        while (true) {

            if(product === 'Bake!') {

                if (flour && sugar && eggs){
                    console.log(`Baking batch number ${index}...`);
                    break;
                } else {
                    console.log('The batter should contain flour, eggs and sugar!');
                    product = input.shift();                        
                }
            }
            
            if (product === 'flour') {
                flour = true;
            } else if (product === 'sugar') {
                sugar = true;
            } else if (product === 'eggs') {
                eggs = true;
            }
                product = input.shift();
        }
    }
}

cookieFactory([3,'flour','eggs','jam','Bake!','sugar','Bake!','flour','eggs', 'milk','almonds','sugar','Bake!','flour','eggs','sugar','Bake!'])