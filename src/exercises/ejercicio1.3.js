import { resultMessage } from "./_exercises"

const nota1 = 6.8
const nota2 = 7.2
const nota3 = 4.3
const promedio = (nota1 + nota2 + nota3) / 3

export function main1_3() {
    resultMessage(`Average notes: ${promedio.toFixed(2)}`)
}