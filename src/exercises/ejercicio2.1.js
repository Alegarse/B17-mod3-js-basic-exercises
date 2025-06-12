import { resultMessage } from "./_exercises"

const number = -34

export function main2_1() {
    if (number < 0) {
        resultMessage(`${number} is a negative number`)
    } else if (number === 0) {
        resultMessage(`${number} is equal to zero`)
    } else {
        resultMessage(`${number} is a negatiuve number`)
    }
}