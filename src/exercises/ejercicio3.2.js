function factorial(num) {
    if (num === 1 || num === 0) return 1;
    return (num * factorial(num-1))
}

export function main3_2() {
    const num = parseInt(prompt("Enter a num to get the factorial", 4));
    console.log(`El factorial del número ${num} es: ${factorial(num)}`);
}