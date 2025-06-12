import { resultMessage } from './_exercises.js';
import {getRandomArray} from './ejercicio4.1.js'

function isEven(number) {
    if (number % 2 === 0) return true;
}

export function main4_3() {
    const number = parseInt(prompt("Enter a num to get an Array", 30));
    let numbers = getRandomArray(number);
    const evenNumbers = numbers.filter(isEven);
    resultMessage(`Array generado: ${numbers}\nElementos pares del Array generado: ${evenNumbers}`);
}