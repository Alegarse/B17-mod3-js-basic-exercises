import {getRandomArray} from './ejercicio4.1.js'

export function main4_4() {
    const number = parseInt(prompt("Enter a num to get an Array", 8));
    let nums = getRandomArray(number);
    let newNums = nums.map(num => num * 2);
    console.log(`Array inicial: ${nums}`);
    console.log(`Array inicial * 2: ${newNums}`);
}