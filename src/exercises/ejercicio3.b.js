import { resultMessage } from "./_exercises";

/**
 * 
 * fórmula
 * fib(1) = 1;
 * fib(2) = 1;
 * firb(n) = fin(n-2) + fib(n-1)
 * serie 1, 1, 2, 3, 5, 8, 13, 21, ... 
 */
function fibonacci(num) {
    if (num === 0) return 0;
    if (num === 1 || num === 2) return 1;
    return (fibonacci(num-2)+fibonacci(num-1));
}

export function main3_b() {
    const num = parseInt(prompt("Enter a num to get the Fibonaccy serie: ", 13));
    let arrayFibonacci = [];
    for(let i = 0; i<= num; i++) {
        arrayFibonacci.push(fibonacci(i));
    }
    resultMessage(`Serie de Fibonacci de ${num}\n${arrayFibonacci}`)
}