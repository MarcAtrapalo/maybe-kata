import {expect} from 'chai';
import {
    addMark,
    applyMarkCorrection,
    finalMark,
    isLastHigherThan5,
    last,
} from './maybe';
import {Maybe} from 'tsmonad';

describe('last', () => {
    it('should return a Maybe', () => {
        const sut = last([]);
        expect(Maybe.isNothing(sut) || Maybe.isJust(sut)).to.be.true;
    });

    it('should return the last element', () => {
        expect(last([1, 2, 3]).equals(Maybe.just(3))).to.be.true;
    });

    it('should return Nothing if array is empty', () => {
        expect(last([]).equals(Maybe.nothing())).to.be.true;
    });

    it('should return Nothing if no array given', () => {
        expect((last as any)().equals(Maybe.nothing())).to.be.true;
    });
});

describe('isLastHigherThan5', () => {
    it('should return true if last is higher than 5', () => {
        expect(isLastHigherThan5([1,7])).to.be.true;
    });

    it('should return true if last is 5', () => {
        expect(isLastHigherThan5([5])).to.be.true;
    });

    it('should return false if last is lesser than 5', () => {
        expect(isLastHigherThan5([9,4])).to.be.false;
    });

    it('should return false if array is empty', () => {
        expect(isLastHigherThan5([])).to.be.false;
    });

    it('should return false if no array given', () => {
        expect((isLastHigherThan5 as any)()).to.be.false;
    });
});

describe('finalMark', () => {
    it('should return the correct mark for an outstanding student', () => {
        expect(finalMark([9, 9, 9], 9)).to.equal(9);
    });

    it('should return the correct mark for a lazy ass that did not attend the finals', () => {
        expect(finalMark([2, 0, 4], null)).to.equal(1);
    });

    it('should return the correct mark even if the system did not record all the marks properly', () => {
        expect(finalMark([5, null, 7], 6)).to.equal(6);
    });

    it('should return the correct mark even if a value is undefined because of an internal error', () => {
        expect(finalMark([5, undefined, 5], 5)).to.equal(5);
    });

    it('should return the correct mark when final mark is undefined', () => {
        expect(finalMark([1, 2, 3], undefined)).to.equal(1);
    });

    it('should return zero if marks not found', () => {
        expect(finalMark(null, 10)).to.equal(0);
    });
});

describe('addMark', () => {
    it('should add a new mark to the array', () => {
        expect(addMark(5, [1, 2])).to.have.length(3);
    });

    it('should add a new null mark', () => {
        expect(addMark(null, [])).to.have.length(1);
    });

    it('should not crash if no array is provided', () => {
        expect(() => addMark(9, null)).to.not.throw(Error);
    });
});

describe('applyMarkCorrection', () => {
    const correction = x => x + 0.5;

    it('should apply the correction to all the marks', () => {
        expect(applyMarkCorrection(correction, [1, 2])).to.deep.equal([1.5, 2.5]);
    });

    it('should not apply the correction to a null mark', () => {
        expect(applyMarkCorrection(correction, [null, 5])).to.deep.equal([null, 5.5]);
    });

    it('should not crash if there are no marks', () => {
        expect(() => applyMarkCorrection(correction, null)).to.not.throw(Error);
    });
});
