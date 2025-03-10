import {getRandomArray} from './ejercicio4.1.js'

let nums = getRandomArray(8);
let newNums = nums.map(num => num * 2);

export function main4_4() {
    console.log(nums);
    console.log(newNums);
}