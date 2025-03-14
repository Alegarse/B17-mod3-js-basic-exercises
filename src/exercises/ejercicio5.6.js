import { students } from "./estudiantes.js";

export function main5_6() {
    students.forEach(student => {
        console.log(`Nombre: ${student.studentName}`);
        console.log(`Calificación: ${student.grade}`);
    })
}