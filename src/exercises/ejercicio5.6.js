import { resultMessage } from "./_exercises.js";
import { students } from "./estudiantes.js";

export function main5_6() {
    let result = "";
    students.forEach(student => {
        result += `Name: ${student.studentName} | Grade: ${student.grade}\n`;
    })
    resultMessage(result)
}