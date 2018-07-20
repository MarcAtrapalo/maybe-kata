import {expect} from 'chai';
import {
    divideBy,
    halfTheLast,
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

describe('divideBy', () => {
    it('should return a maybe', () => {
        const sut = divideBy(2, 1);
        expect(Maybe.isNothing(sut) || Maybe.isJust(sut)).to.be.true;
    });

    it('should be curried', () => {
        expect(divideBy(2)(4).equals(divideBy(2, 4))).to.be.true;
    });

    it('should return the division, if any', () => {
        expect(divideBy(5, 10).valueOr(null)).to.equal(2);
    });

    it('should return Nothing if trying to divide by zero', () => {
        expect(divideBy(0, 10).equals(Maybe.nothing())).to.be.true;
    });
});

describe('halfTheLast', () => {
    it('should return a maybe', () => {
        const sut = halfTheLast([4]);
        expect(Maybe.isNothing(sut) || Maybe.isJust(sut)).to.be.true;
    });

    it('should return half the last, if any', () => {
        expect(halfTheLast([1, 3, 4]).valueOr(null)).to.equal(2);
    });

    it('should return Nothing, if no last item', () => {
        expect(halfTheLast([]).equals(Maybe.nothing())).to.be.true;
    });
});
