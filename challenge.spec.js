import sum from './challenge';

describe('sum function', () => {
   test('1 + 2 must return 3', () => {
    expect(sum(1, 2)).toBe(3);
   })

   test('if no values were provided it should return 0', () => {
    expect(sum()).toBe(0);
   })
});