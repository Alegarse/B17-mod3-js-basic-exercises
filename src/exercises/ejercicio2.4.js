import { resultMessage } from "./_exercises"

export function main2_4() {
    const year = prompt("Insert a year in YYYY format: ", 1980)
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        resultMessage( `Year ${year} is bisiest`)
    } else {
        resultMessage( `Year ${year} isn't bisiest`)
    }
}