import {getRandomArray} from './ejercicio4.1.js'

function isEven(number) {
    if (number % 2 === 0) return true;
}

export function main4_3() {
    let numbers = getRandomArray(30);
    console.log(numbers);
    const evenNumbers = numbers.filter(isEven);
    console.log(evenNumbers);
}