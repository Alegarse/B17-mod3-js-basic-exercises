import {getRandomArray} from './ejercicio4.1.js'

function isEven(number) {
    if (number % 2 === 0) return true;
}

export function main4_3() {
    const number = parseInt(prompt("Enter a num to get an Array", 30));
    let numbers = getRandomArray(number);
    console.log(`Array generado: ${numbers}`);
    const evenNumbers = numbers.filter(isEven);
    console.log(`Elementos pares del Array generado: ${evenNumbers}`);
}