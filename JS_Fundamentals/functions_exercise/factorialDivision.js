function solve(firstNum, secondNum) {

    function calculateFacotiral(num) {
        let factorial = 1;
        
        for (let i = 1; i <= num; i++) {
            factorial *= i;            
        }

        return factorial;
    }

    console.log((calculateFacotiral(firstNum) /calculateFacotiral(secondNum)).toFixed(2));
    
}

solve(5, 2);