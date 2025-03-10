function factorial(num) {
    if (num < 0) {
        console.log("Must be a positive number")
    } else if (num === 1 || num === 0) {
        console.log(1);
    } else {
        let acc = 1;
        for(let i = 2; i <= num; i++) acc *= i;
        console.log(acc);
    }
}

function recursiveFactorial(num) {
    if (num === 1 || num === 0) return 1;
    return (num * recursiveFactorial(num-1))
}

factorial(8);
console.log(recursiveFactorial(8));