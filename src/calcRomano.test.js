
import {calcRomano} from './calcRomano.js';

describe('calcRomano', () => {
    it('should return I when 1', () => {
        expect(calcRomano(1)).toBe('I');
    });
});