const assert = require("assert");
const crossedWires = require("./crossed-wires");

describe("Day 3: Crossed Wires", () => {
  it("should pass test 1", () => {
    const directions = "R8,U5,L5,D3\n" + "U7,R6,D4,L4";
    assert.equal(crossedWires(directions), 6);
  });
  it("should pass test 2", () => {
    const directions =
      "R75,D30,R83,U83,L12,D49,R71,U7,L72\n" +
      "U62,R66,U55,R34,D71,R55,D58,R83";
    assert.equal(crossedWires(directions), 159);
  });
  it("should pass test 3", () => {
    const directions =
      "R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51\n" +
      "U98,R91,D20,R16,D67,R40,U7,R15,U6,R7";
    assert.equal(crossedWires(directions), 135);
  });
});
