const _ = require("lodash");

const spaceImageFormatPart1 = (input, dimensions) => {
  let layers = [];
  let index = 0;
  let minZeroCount;
  let answer;
  while (index < input.length) {
    let row = [];
    for (let h = 0; h < dimensions[1]; h++) {
      for (let w = 0; w < dimensions[0]; w++) {
        row.push(parseInt(input[index]));
        index++;
      }
    }
    layers.push(row);
  }

  _.forEach(layers, function(layer) {
    let zeroCount = _.filter(layer, function(o) {
      return o === 0;
    });
    if (minZeroCount !== undefined) {
      if (minZeroCount > zeroCount.length) {
        let oneCount = _.filter(layer, function(o) {
          return o === 1;
        });
        let twoCount = _.filter(layer, function(o) {
          return o === 2;
        });
        answer = oneCount.length * twoCount.length;
        minZeroCount = zeroCount.length;
      }
    } else {
      minZeroCount = zeroCount.length;
      let oneCount = _.filter(layer, function(o) {
        return o === 1;
      });
      let twoCount = _.filter(layer, function(o) {
        return o === 2;
      });
      answer = oneCount.length * twoCount.length;
    }
  });

  return answer;
};

module.exports = spaceImageFormatPart1;
