import {getRandomArray} from './ejercicio4.1.js'

let arrayNums = getRandomArray(8);
console.log(arrayNums);
console.log(arrayNums.find((element) => element > 3));