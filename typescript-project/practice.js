function calculate(number1, number2, operation) {
    switch (operation) {
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
