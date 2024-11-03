function calculate (number1: number, number2: number, operation: string){
    switch(operation){
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            return number1 / number2;
        default:
            throw new Error('Invalid operation');
    }
}

console.log(calculate(10, 20, "+"));