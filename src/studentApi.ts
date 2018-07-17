export type StudentMarks = {
    math?: number[];
    literature?: number[];
    ethics?: number[];
    mythology?: number[];
    others?: number[];
}

export type StudentFinalMark = {
    math?: number;
    literature?: number;
    ethics?: number;
    mythology?: number;
    others?: number;
}

export function getStudentMarks(name: string): StudentMarks | null {
    if (name === 'Yagami') {
        return {
            math: [10, 9, 10, 9.8],
            literature: [9.5, 9.9, 9.7, 9.8],
            ethics: [10, 7, 4, 1, null],
            mythology: [6, 8, 7, 9, 10],
            others: null,
        };
    } else {
        return null;
    }
}

export function getStudentFinalExamMarks(name: string): StudentFinalMark | null {
    if (name === 'Yagami') {
        return {
            math: 10,
            literature: 10,
            ethics: null,
            mythology: 10,
            others: undefined,
        };
    } else {
        return null;
    }
}