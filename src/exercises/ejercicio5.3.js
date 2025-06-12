import { resultMessage } from './_exercises.js';
import {Persona} from './persona.js'
Persona.edad = 35;

export function main5_3() {
    resultMessage(`Objeto Persona:\n${JSON.stringify(Persona)}\nEdad de la persona cambiada:${Persona.edad}`);
}