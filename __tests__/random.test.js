//examples to show how to use jest

//example 1
// const { test } = require('@jest/globals');
// const checkIfEqual = require('../lib/random');

// test('checks if 10 is equal to 10', () => {
//     expect(checkIfEqual(10, 10)).toBe(true);
// });

//example 2 for testing
const randomNumber = require('../lib/random.js');

test('gets random number between 1 and 10', () => {
    expect(randomNumber()).toBeGreaterThanOrEqual(1);
    expect(randomNumber()).toBeLessThanOrEqual(10);
});