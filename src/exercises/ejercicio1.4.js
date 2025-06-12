import { resultMessage } from "./_exercises";

export function main1_4() {
    const edad = parseInt(prompt("Enter a age:", 44));
    resultMessage(`Con 44 es mayor de edad? ${edad >= 18}`)
}