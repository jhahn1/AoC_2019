const _ = require("lodash");

const crossedWires = input => {
  const bothWirePaths = input.split("\n").map(x => x.trim());
  const firstWirePath = bothWirePaths[0].split(",").map(x => x.trim()),
    secondWirePath = bothWirePaths[1].split(",").map(x => x.trim());
  let manhattanDistances = [],
    pathIntersections = [];

  const firstWireCoordinates = getWireCoordinates(firstWirePath, "First Wire");
  const secondWireCoordinates = getWireCoordinates(secondWirePath, "Second Wire");
  firstWireCoordinates.splice(0,1);
  secondWireCoordinates.splice(0,1);

  _.forEach(firstWireCoordinates, function(coordinate) {
    console.log('Searching wire paths for coordinate ', coordinate)
    if (_.includes(secondWireCoordinates, coordinate)) {
      pathIntersections.push(coordinate);
    }
  });
  _.forEach(pathIntersections, function(intersection) {
    const intersectionInt = intersection.split(',').map(x => x.trim()).map(x => parseInt(x));
    const manhattanDistance =
      Math.abs(0 - intersectionInt[0]) +
      Math.abs(0 - intersectionInt[1]);
    manhattanDistances.push(manhattanDistance);
  });

  const sortedManhattanDistances = _.sortBy(manhattanDistances);
  return sortedManhattanDistances[0];
};

const getWireCoordinates = (input, wire) => {
  let wireCoordinates = ["0, 0"];

  _.forEach(input, function(instruction) {
    const direction = instruction.substring(0, 1),
      distance = parseInt(instruction.substring(1, instruction.length)),
      originCoordinate = wireCoordinates[wireCoordinates.length - 1]
        .split(",")
        .map(x => parseInt(x));
    console.log(`${wire} direction = `, instruction);

    if (direction === "R") {
      for (let i = 1; i <= distance; i++) {
        let x = originCoordinate[0] + i,
          y = originCoordinate[1];
        wireCoordinates.push(`${x},${y}`);
      }
    } else if (direction === "L") {
      for (let i = 1; i <= distance; i++) {
        let x = originCoordinate[0] - i,
          y = originCoordinate[1];
        wireCoordinates.push(`${x},${y}`);
      }
    } else if (direction === "U") {
      for (let i = 1; i <= distance; i++) {
        let x = originCoordinate[0],
          y = originCoordinate[1] + i;
        wireCoordinates.push(`${x},${y}`);
      }
    } else if (direction === "D") {
      for (let i = 1; i <= distance; i++) {
        let x = originCoordinate[0],
          y = originCoordinate[1] - i;
        wireCoordinates.push(`${x},${y}`);
      }
    }
  });

  return wireCoordinates;
};

module.exports = crossedWires;
