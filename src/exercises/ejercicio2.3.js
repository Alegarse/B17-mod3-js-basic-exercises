import { resultMessage } from "./_exercises";

let suma = 0
for (let i=1; i <= 10; i++) {
    suma += i;
}

export function main2_3() {
    resultMessage(`Number's summatory from 1 to 10: ${suma}`)
}