import { resultMessage } from './_exercises.js';
import {Persona} from './persona.js'

const name = Persona.nombre;

const {edad} = Persona;
const {profesion} = Persona

export function main5_2() {
    resultMessage(`Persona:\nNombre: ${name}\nEdad: ${edad}\nProfesión: ${profesion}`);
}