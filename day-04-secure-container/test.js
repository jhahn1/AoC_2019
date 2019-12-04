const assert = require("assert");
const secureContainer = require("./secure-container");

describe("Day 4: Secure Container", () => {
    it('should pass test 1', () => {
       assert.equal(secureContainer(111111), true);
    });
    it('should pass test 2', () => {
        assert.equal(secureContainer(223450), false);
    });
    it('should pass test 3', () => {
        assert.equal(secureContainer(123789), false);
    });
    it('should print out the answer to Part 1', () => {
        console.log('Answer = ', secureContainer('178416-676461'));
    });
});
