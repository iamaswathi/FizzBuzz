/**
 * fizzBuzz() - prints the numbers from 1 to the number passed as input.
 * But for multiples of three print “Fizz” instead of the number and for
 * the multiples of five print “Buzz”. For numbers which are
 * multiples of both three and five print “FizzBuzz”.
 * @param - theLength
 * @return - result array
 */
function fizzBuzz(theLength) {
    if(isNaN(theLength)) {
        return "Not a number";
    } else {
        const result = [];
        for(var i=1; i<=theLength; i++) {
            if((i % 5 === 0) && (i % 3 === 0)) {
                result.push("FizzBuzz");
            } else if(i % 5 === 0) {
                result.push("Buzz");
            } else if(i % 3 === 0) {
                result.push("Fizz");
            } else {
                result.push(i);
            }
        }
        return result;
    }
}

module.exports = fizzBuzz;