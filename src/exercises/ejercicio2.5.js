export function main2_5() {
    const number = prompt("Insert a number to get its multiple table:", 7)
    console.log(`Multiple table ${number}`)
    for (let i = 1; i <= 10; i++) {
        console.log (`${number} x ${i} = ${number*i}`)
    }
}