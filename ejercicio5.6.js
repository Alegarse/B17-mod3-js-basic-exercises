import { Estudiantes } from "./estudiantes.js";

Estudiantes.forEach(estudiante => {
    console.log(`Nombre: ${estudiante.nombre}`);
    console.log(`Calificación: ${estudiante.calificación}`);
})