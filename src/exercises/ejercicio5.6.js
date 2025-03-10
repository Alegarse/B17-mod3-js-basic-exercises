import { Estudiantes } from "./estudiantes.js";

export function main5_6() {
    Estudiantes.forEach(estudiante => {
        console.log(`Nombre: ${estudiante.nombre}`);
        console.log(`Calificación: ${estudiante.calificación}`);
    })
}