import {getRandomArray} from './ejercicio4.1.js'

export function main4_5() {
    const number = parseInt(prompt("Enter a num to get an Array", 8));
    let arrayNums = getRandomArray(number);
    console.log(`Array inicial: ${arrayNums}`);
    console.log(`Primer número mayor que 3: ${arrayNums.find((element) => element > 3)}`);
}