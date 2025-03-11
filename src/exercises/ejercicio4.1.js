function getRandomNumber() {
    return Math.round(Math.random() * 100)
}

export function getRandomArray(num) {
    let arrayNumbers = [];
    for (let i = 1; i <= num; i++) {
        const randomNumber = getRandomNumber();
        arrayNumbers.push(randomNumber);
    }
    return arrayNumbers;
}

function getMinMax(arrayNums) {
    let min, max;
    arrayNums.forEach(number => {
        if (min === undefined || number < min) min = number;
        if (max === undefined || number > max) max = number;
    });
    return [min, max];
}

export function main4_1() {
    let numbers = getRandomArray(10);
    let arrayMinMax = getMinMax(numbers);

    console.log(`Array de numeros: ${numbers}`);
    console.log(`Min: ${arrayMinMax[0]}`);
    console.log(`Max: ${arrayMinMax[1]}`);
}