import { resultMessage } from './_exercises.js';
import {Persona} from './persona.js'
Persona.edad = 35;

export function main5_3() {
    resultMessage('Objeto Persona:');
    resultMessage(Persona);
    resultMessage('Edad de la persona cambiada:');
    resultMessage(Persona.edad);
}