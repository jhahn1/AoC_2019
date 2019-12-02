const assert = require("assert");
const programAlarm = require("./program-alarm");

describe("Day 2: Program Alarm", () => {
  it("should pass test 1", () => {
    assert.equal(programAlarm("1,0,0,0,99"), "2,0,0,0,99");
  });
  it("should pass test 2", () => {
    assert.equal(programAlarm("2,3,0,3,99"), "2,3,0,6,99");
  });
  it("should pass test 3", () => {
    assert.equal(programAlarm("2,4,4,5,99,0"), "2,4,4,5,99,9801");
  });
  it("should pass test 4", () => {
    assert.equal(programAlarm("1,1,1,4,99,5,6,0,99"), "30,1,1,4,2,5,6,0,99");
  });
  it("should print out the answer to Part 1", () => {
    const inputArray =
      "1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,13,19,1,10,19,23,2,9,23,27,1,6,27,31,1,10,31,35,1,35,10,39,1,9,39,43,1,6,43,47,1,10,47,51,1,6,51,55,2,13,55,59,1,6,59,63,1,10,63,67,2,67,9,71,1,71,5,75,1,13,75,79,2,79,13,83,1,83,9,87,2,10,87,91,2,91,6,95,2,13,95,99,1,10,99,103,2,9,103,107,1,107,5,111,2,9,111,115,1,5,115,119,1,9,119,123,2,123,6,127,1,5,127,131,1,10,131,135,1,135,6,139,1,139,5,143,1,143,9,147,1,5,147,151,1,151,13,155,1,5,155,159,1,2,159,163,1,163,6,0,99,2,0,14,0";
    const answerArray = programAlarm(inputArray);
    console.log("Answer = ", answerArray[0]);
  });
});
