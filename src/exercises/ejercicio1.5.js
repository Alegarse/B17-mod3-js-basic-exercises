import { resultMessage } from "./_exercises"

const nombre = "Alejandro"
const apellido = "García"
const nombreCompleto = nombre + " " + apellido

export function main1_5() {
    resultMessage(`The complete name is: ${nombreCompleto}`)
}