
import {calcRomano} from './calcRomano.js';

describe('calcRomano', () => {
    it('should return I when recibes 1', () => {
        expect(calcRomano(1)).toBe('I');
    });
    it('should return IV when recibes 4', () => {
        expect(calcRomano(4)).toBe('IV');
    });
    it('should return 5 when recibes 5', () => {
        expect(calcRomano(5)).toBe('V');
    });
    it('should return IX when recibes 9', () => {
        expect(calcRomano(9)).toBe('IX');
    });
    it('should return X when recibes 10', () => {
        expect(calcRomano(10)).toBe('X');
    });
    it('should return XL when recibes 40', () => {
        expect(calcRomano(40)).toBe('XL');
    });

});