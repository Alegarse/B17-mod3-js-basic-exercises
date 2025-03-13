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
            if (num2 === 0) throw new Error('Zero division error');
            result = num1 / num2;
            break;
        default:
            throw new Error('Invalid operator');
    }
    console.log(`El resultado de la operación es: ${result}`);
}

export function main3_1() {
    const num1 = parseInt(prompt("Enter a num", 4));
    const num2 = parseInt(prompt("Enter another num", 7));
    const operator = prompt("Enter the operator [+,-,*,/]", "+");
    calculadora(num1, num2, operator);
}