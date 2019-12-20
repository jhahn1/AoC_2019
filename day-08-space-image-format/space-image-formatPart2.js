const _ = require("lodash");

const spaceImageFormatPart2 = (input, dimensions) => {
  let layers = [];
  let index = 0;
  let result = createEmptyResult(dimensions);
  const white = String.fromCharCode(9619);
  const black = String.fromCharCode(9617);
  // const white = "white";
  // const black = "black";

  while (index < input.length) {
    let rows = [];
    for (let h = 0; h < dimensions[1]; h++) {
      let row = [];
      for (let w = 0; w < dimensions[0]; w++) {
        row.push(parseInt(input[index]));
        index++;
      }
      rows.push(row);
    }
    layers.push(rows);
  }

  for (let i = layers.length - 1; i >= 0; i--) {
    let layer = layers[i];
    for (let r = 0; r < layer.length; r++) {
      let row = layer[r];
      for (let s = 0; s < row.length; s++) {
        let newColor = row[s];
        let currentColor = result[r][s];
        let finalColor = -1;

        if (currentColor === -1) {
          finalColor = newColor === 2 ? 2 : newColor === 1 ? white : black;
        } else {
          finalColor =
            newColor === 2 ? currentColor : newColor === 1 ? white : black;
        }
        result[r][s] = finalColor;
      }
    }
  }

  _.forEach(result, function(row) {
    console.log(row.join(""));
  });
};

const createEmptyResult = dimensions => {
  let rows = [];
  for (let h = 0; h < dimensions[1]; h++) {
    let row = [];
    for (let w = 0; w < dimensions[0]; w++) {
      row.push(-1);
    }
    rows.push(row);
  }
  return rows;
};

module.exports = spaceImageFormatPart2;
