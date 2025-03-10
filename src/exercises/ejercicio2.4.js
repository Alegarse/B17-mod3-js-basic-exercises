export function main2_4() {
    const year = prompt("Insert a year in YYYY format: ", 1980)
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        console.log( `Year ${year} is bisiest`)
    } else {
        console.log( `Year ${year} isn't bisiest`)
    }
}