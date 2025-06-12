import { resultMessage } from './_exercises.js';
import {Persona} from './persona.js'

Persona['ciudad'] = 'Benalmádena';

export function main5_4() {
    resultMessage('Objeto Persona:')
    resultMessage(Persona);
}