function contarVocales(string) {
    const vowels = "aeiouAEIOU";
    let arrayString = string.split('');
    let acc = 0;
    arrayString.forEach(char => {
        if(vowels.includes(char)) acc++;
    });
    console.log(`The string "${string}" contains ${acc} vowels`);
}

export function main3_3() {
    const string = prompt("Enter a string for vowels count:", 'Ambiciosa combinacion de colores');
    contarVocales(string);
}