const fizzBuzz = require('../../src/fizzBuzz');

/**
 * Iteration 1
 * Start with the most simple unit test, a unit test that will output nothing
 * as fizzBuZZ() is not defined yet.
 * Expected: Failed test
 */ 
describe('fizzBuzz', () => {
    it('expects fizzBuzz to be undefined', () => {
        expect(fizzBuzz()).toBeUndefined();
    })
});

/**
 * Iteration 2
 * Define fizzBuzz()
 * Expected: Succeded test
 */ 
describe('fizzBuzz', () => {
    it('expects fizzBuzz to be defined', () => {
        expect(fizzBuzz('fizzBuzz')).toBeDefined();
    })
});

/**
 * Iteration 3
 * Invoke fizzBuzz() with a string (or not a number)
 * Expected: Succeded test
 */ 
describe('fizzBuzz', () => {
    it('executes', () => {
        expect(fizzBuzz('fizzBuzz')).toBe("Not a number");
    })
});

/**
 * Iteration 4
 * Invoke fizzBuzz() with a string (or not a number)
 * Expected: Failed test
 */ 
 describe('fizzBuzz', () => {
    it('executes', () => {
        expect(fizzBuzz('fizzBuzz')).toEqual([1]);
    })
});

/**
 * Iteration 5
 * Invoke fizzBuzz() so that the first two numbers are returned
 * Expected: Succeded test
 */ 
describe('fizzBuzz', () => {
    it('should return numbers if not divisible by 3 or 5', () => {
        expect(fizzBuzz(1)).toEqual([1]);
        expect(fizzBuzz(2)).toEqual([1, 2]);
    })
});

/**
 * Iteration 6
 * Invoke fizzBuzz() to get the first 3 numbers, but as the 
 * third number is multiple of 3, expects to output 'Fizz' instead of the number 3
 * Expected: Succeded test
 */ 
describe('fizzBuzz', () => {
    it('should return numbers and Fizz if any number is divisible by 3', () => {
        expect(fizzBuzz(3)).toEqual([1, 2, "Fizz"]);
    })
});

/**
 * Iteration 7
 * Invoke fizzBuzz() to get the first 5 numbers, but as the 
 * third number is multiple of 3, expects to output 'Fizz' instead of the number 3.
 * Also the fifth number is multiple of 5, expects to output 'Buzz' instead of the number 5.
 * Expected: Succeded test
 */ 
describe('fizzBuzz', () => {
    it('should return numbers and Fizz and Buzz if any number is divisible by 3 or 5 respectively', () => {
        expect(fizzBuzz(5)).toEqual([1, 2, "Fizz", 4, "Buzz"]);
    })
});

/**
 * Iteration 8
 * Invoke fizzBuzz() to get the first 15 numbers.
 * Expect result as in Iteration 7 and as 15th number is divisible by both 3 and 5,
 * expects to output 'FizzBuzz' instead of the number 15
 * Expected: Succeded test
 */ 
describe('fizzBuzz', () => {
    it('executes', () => {
        expect(fizzBuzz(15)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
    })
});

/**
 * Iteration 9
 * Invoke fizzBuzz() to get all 100 numbers.
 * Expect same result as Iteration 8 for numbers from 1 to 100
 */
describe('fizzBuzz', () => {
    it('executes', () => {
        expect(fizzBuzz(100)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz", "Fizz", 52, 53, "Fizz", "Buzz", 56, "Fizz", 58, 59, "FizzBuzz", 61, 62, "Fizz", 64, "Buzz", "Fizz", 67, 68, "Fizz", "Buzz", 71, "Fizz", 73, 74, "FizzBuzz", 76, 77, "Fizz", 79, "Buzz", "Fizz", 82, 83, "Fizz", "Buzz", 86, "Fizz", 88, 89, "FizzBuzz", 91, 92, "Fizz", 94, "Buzz", "Fizz", 97, 98, "Fizz", "Buzz"]);
    })
});