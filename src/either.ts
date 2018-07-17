import {
    getStudentFinalExamMarks,
    getStudentMarks,
} from './studentApi';
import {
    applyMarkCorrection,
    finalMark,
} from './maybe';

export function evalStudent(name: string, subject: string): number {
    const student = getStudentMarks(name);
    if (student) {
        const marks = student[subject];
        if (marks) {
            const finalMarks = getStudentFinalExamMarks(name);
            if (finalMarks && finalMarks[subject]) {
                const correction = finalMarks[subject] > 5
                    ? x => x + 0.5
                    : x => x;
                const correctedMarks = applyMarkCorrection(correction, marks);
                return finalMark(correctedMarks, finalMarks[subject]);
            }
            return finalMark(marks, finalMarks[subject]);
        }
        return 0;
    }
    return undefined;
}
