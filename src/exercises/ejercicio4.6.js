import { resultMessage } from "./_exercises";

const original = ['r', 8, 14, 57, 'Hola', 'como', 'estás?', 78, 13];
let newArray = original.slice(4,7);

export function main4_6() {
    resultMessage(`Array original: ${original}`)
    resultMessage(`Array posisciones 4 a 7: ${newArray}`);
}