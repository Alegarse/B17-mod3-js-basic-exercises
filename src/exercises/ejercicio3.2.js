function factorial(num) {
    if (num === 1 || num === 0) return 1;
    return (num * factorial(num-1))
}

export function main3_2() {
    console.log(factorial(8));
}