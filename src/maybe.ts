// final exam accounts for half the points
export function finalMark(marks: number[], finalExamMark: number | null) {
    let totalPoints = 0;
    let numberOfMarks = 0;
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] !== null) {
            totalPoints += marks[i];
            numberOfMarks++;
        }
    }
    return ((totalPoints / numberOfMarks) + finalExamMark) / 2;
}

export function addMark(newMark: number, marks: number[]) {
    marks.push(newMark);
    return marks;
}

export function applyMarkCorrection(correction: (mark: number) => number, marks: number[]) {
    for (let i = 0; i < marks.length; ++i) {
        marks[i] = correction(marks[i]);
    }
    return marks;
}
