function contarVocales(string) {
    const vocales = "aeiouAEIOU";
    let arrayString = string.split('');
    let acc = 0;
    arrayString.forEach(char => {
        if(vocales.includes(char)) acc++;
    });
    console.log(`The string "${string}" contains ${acc} vocals`);
}

export function main3_3() {
    const string = prompt("Enter a string for vocals's count:", 'Ambiciosa combinacion de colores');
    contarVocales(string);
}