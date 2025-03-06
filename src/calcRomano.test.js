
import {calcRomano} from './calcRomano.js';

describe('calcRomano', () => {
    it('should return I when recibes 1', () => {
        expect(calcRomano(1)).toBe('I');
    });
    it('should return II when recibes 2', () =>{
        expect(calcRomano(2)).toBe('II');
    })
});