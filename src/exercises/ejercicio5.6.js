import { resultMessage } from "./_exercises.js";
import { students } from "./estudiantes.js";

export function main5_6() {
    students.forEach(student => {
        resultMessage(`Name: ${student.studentName} | Grade: ${student.grade}`);
    })
}