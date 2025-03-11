function calculadora(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 === 0 ? 'Zero division error': num1 / num2;
            break;
        default:
            result = 'Invalid operator'
    }
    console.log(`El resultado de la operación es: ${result}`);
}

export function main3_1() {
    const num1 = parseInt(prompt("Enter a num", 4));
    const num2 = parseInt(prompt("Enter another num", 7));
    const operator = prompt("Enter the operator [+,-,*,/]", "+");
    calculadora(num1, num2, operator);
}