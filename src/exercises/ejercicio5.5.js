import { resultMessage } from './_exercises.js';
import {students} from './estudiantes.js'

export function main5_5() {
    resultMessage(`Objeto Estudiantes:\n${JSON.stringify(students)}`);
}