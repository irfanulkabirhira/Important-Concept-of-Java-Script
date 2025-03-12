// Call Function in Funciton

function add (num1, num2){
    return num1 + num2;
}
function subrtractin(num1 , num2){
    return num1 - num2
}
function multiplication(num1,num2){
    return num1 * num2
}
function divition(num1 , num2){
    return num1 / num2

}
function calculator(a , b, operator){
    if (operator==='add'){
        const result =add(a,b)
        return result;
    }
    else if (operator==='subrtractin'){
        const result = subrtractin(a,b)
        return result
    }
    else if(operator === 'multiplication'){
        const result = multiplication(a, b)
        return result
    }
    else if(operator === divition){
        const result = divition(a,b)
        return result
    }
    else{
        return 'Inavlied Operator '
    }
}
const result = calculator(3, 7, 'multiplication')
console.log("Result of Multiplication is  ", result)