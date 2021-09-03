const head = require('./head');

describe('Head', () => {

    it('Return null for empty array', () => {
        expect(head([])).toEqual(null);
    });

    it('Return first element when size greater than one', () => {
        expect(head([1,2,3])).toEqual(1);
    });

    it('Return first element when array has one element', () => {
        expect(head([1])).toEqual(1);
    });

    it('Return first element when array has string', () => {
        expect(head(['first', 'element'])).toEqual('first');
    });

});
