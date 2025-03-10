import {phraseLowerWithOutSpacesAndAcents} from './ejercicio3.a.js'

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let string = "AlejandroGarcíaSerrano";
let positionArray = [];

function charPosition(string, arrayAlphabet, positionArray) {
    string.forEach(char => {
        arrayAlphabet.forEach(charAlpha => {
            if (char === charAlpha) positionArray.push(arrayAlphabet.indexOf(charAlpha));
        });
    });
    return positionArray;
}

// String without Caps and Acents
string = phraseLowerWithOutSpacesAndAcents(string);

// Array string and alphabet
let stringArray = string.split('');
let alphabetArray = alphabet.split('');
positionArray = charPosition(stringArray, alphabetArray, positionArray);

export function main4_2() {
    console.log(positionArray);
}
