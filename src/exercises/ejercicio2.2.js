import { resultMessage } from "./_exercises";

export function main2_2() {
    let result = [];
    for (let i=1; i<=20; i++) {
        if(i %2 === 0) result.push(i)
    }
resultMessage(result)
}