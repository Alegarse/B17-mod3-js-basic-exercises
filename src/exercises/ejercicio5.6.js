import { students } from "./estudiantes.js";

export function main5_6() {
    students.forEach(student => {
        console.log(`Name: ${student.studentName} | Grade: ${student.grade}`);
    })
}