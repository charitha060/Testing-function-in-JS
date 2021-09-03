const tails = require('./tail');

describe('Tail', () => {

    it('Return null for empty array', () => {
        expect(tail([])).toEqual(null);
    });

    it('Return 6 for array [1,2,6]', () => {
        expect(tail([1, 2, 6])).toEqual(6);
    });

    it('Return 1 for array [1]', () => {
        expect(tail([1])).toEqual(1);
    });
});