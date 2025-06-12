import { resultMessage } from "./_exercises"

export function main2_5() {
    const number = prompt("Insert a number to get its multiple table:", 7)
    let result = `Multiple table ${number}\n`
    for (let i = 1; i <= 10; i++) {
        result += `${number} x ${i} = ${number*i}\n`
    }
    resultMessage(result)
}