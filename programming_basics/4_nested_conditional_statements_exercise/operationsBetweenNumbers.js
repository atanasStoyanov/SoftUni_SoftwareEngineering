function operations (input){
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    let result = 0;
    let OddOrEven = null;

    if (operator == '+'){
        result = n1 + n2;
        if (result % 2 == 0){
            OddOrEven = 'even';
        }else{
            OddOrEven = 'odd';
        }
    }else if ( operator == '-'){
        result = n1 - n2;
        if (result % 2 == 0){
            OddOrEven = 'even';
        }else{
            OddOrEven = 'odd';
        }
    } else if(operator == '*'){
        result = n1 * n2;
        if (result % 2 == 0){
            OddOrEven = 'even';
        }else{
            OddOrEven = 'odd'
        }
    } else if(operator == '/' && n2 != 0){
        result = n1 / n2
        
    }else if (operator == '%' && n2 != 0){
        result = n1 % n2
    }

    if(operator == '+' || operator == '-' || operator == '*'){
    console.log (`${n1} ${operator} ${n2} = ${result} - ${OddOrEven}`)
    }else if(operator == '/' && n2 != 0){
        console.log (`${n1} ${operator} ${n2} = ${result.toFixed(2)}`)
    } else if (operator == '%' && n2 != 0){
        console.log (`${n1} ${operator} ${n2} = ${result}`)
    }else if (n2 == 0){
        console.log (`Cannot divide ${n1} by zero`)
    }
}

operations(['10', '0', '%'])