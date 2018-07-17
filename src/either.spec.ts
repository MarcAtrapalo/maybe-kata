import {expect} from 'chai';
import {evalStudent} from './either';

describe('evalStudent', () => {
    it.only('should return 9.25 for Yagami\'s mythology mark', () => {
        expect(evalStudent('Yagami', 'mythology')).to.equal(9.25);
    });
});
