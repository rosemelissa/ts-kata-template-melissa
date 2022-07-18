import sum from './sum';

test('returns sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(1, -2)).toBe(-1);
    expect(sum(1, 2.5)).toBe(3.5);
});