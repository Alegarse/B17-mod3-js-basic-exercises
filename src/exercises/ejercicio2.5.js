import { resultMessage } from "./_exercises"

export function main2_5() {
    const number = prompt("Insert a number to get its multiple table:", 7)
    resultMessage(`Multiple table ${number}`)
    for (let i = 1; i <= 10; i++) {
        resultMessage (`${number} x ${i} = ${number*i}`)
    }
}