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

let arrayFibonacci = [];
let num = 15;
for(let i = 0; i<= num; i++) {
    arrayFibonacci.push(fibonacci(i));
}

console.log(arrayFibonacci)