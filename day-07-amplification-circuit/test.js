const assert = require('assert');
const amplificationCircuit = require('./amplification-circuit');

describe('Day 7: Amplification Circuit', () => {
    it('should pass test 1', () => {
        const input = [3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0];
        const phaseSettingSequence = [4,3,2,1,0];
        assert.equal(amplificationCircuit(input, phaseSettingSequence), 43210);
    });
    it('should pass test 2', () => {
        const input = [3,23,3,24,1002,24,10,24,1002,23,-1,23,
           101,5,23,23,1,24,23,23,4,23,99,0,0];
        const phaseSetingSequence = [0,1,2,3,4];
       assert.equal(amplificationCircuit(input,phaseSetingSequence), 54321);
    });
    it('should pass test 3', () => {
        const input = [3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,
            1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0];
        const phaseSetingSequence = [1,0,4,3,2];
        assert.equal(amplificationCircuit(input, phaseSetingSequence), 65210);
    })
});