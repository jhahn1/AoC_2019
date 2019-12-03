const _ = require("lodash");

const crossedWires = input => {
  const bothWirePaths = input.split("\n").map(x => x.trim());
  const firstWirePath = bothWirePaths[0].split(",").map(x => x.trim()),
    secondWirePath = bothWirePaths[1].split(",").map(x => x.trim());
  let firstWireCoordinates = ["0, 0"],
    pathIntersections = [],
    secondWireLastCoordinate = [0, 0],
    manhattanDistances = [];

  _.forEach(firstWirePath, function(instruction) {
    const direction = instruction.substring(0, 1),
      distance = parseInt(instruction.substring(1, instruction.length)),
      originCoordinate = firstWireCoordinates[firstWireCoordinates.length - 1]
        .split(",")
        .map(x => parseInt(x));
    console.log("Direction = ", instruction);

    if (direction === "R") {
      for (let i = 1; i <= distance; i++) {
        let x = originCoordinate[0] + i,
          y = originCoordinate[1];
        firstWireCoordinates.push(`${x},${y}`);
      }
    } else if (direction === "L") {
      for (let i = 1; i <= distance; i++) {
        let x = originCoordinate[0] - i,
          y = originCoordinate[1];
        firstWireCoordinates.push(`${x},${y}`);
      }
    } else if (direction === "U") {
      for (let i = 1; i <= distance; i++) {
        let x = originCoordinate[0],
          y = originCoordinate[1] + i;
        firstWireCoordinates.push(`${x},${y}`);
      }
    } else if (direction === "D") {
      for (let i = 1; i <= distance; i++) {
        let x = originCoordinate[0],
          y = originCoordinate[1] - i;
        firstWireCoordinates.push(`${x},${y}`);
      }
    }
  });

  _.forEach(secondWirePath, function(instruction) {
    console.log("Second = ", instruction);
    const direction = instruction.substring(0, 1),
      distance = parseInt(instruction.substring(1, instruction.length));

    if (direction === "R") {
      for (let i = 1; i <= distance; i++) {
        let coordinate = [
          parseInt(secondWireLastCoordinate[0]) + i,
          parseInt(secondWireLastCoordinate[1])
        ];
        if (
          _.includes(firstWireCoordinates, `${coordinate[0]},${coordinate[1]}`)
        )
          pathIntersections.push(coordinate);
      }
      secondWireLastCoordinate = [
        secondWireLastCoordinate[0] + distance,
        secondWireLastCoordinate[1]
      ];
    } else if (direction === "L") {
      for (let i = 1; i <= distance; i++) {
        let coordinate = [
          parseInt(secondWireLastCoordinate[0]) - i,
          parseInt(secondWireLastCoordinate[1])
        ];
        if (
          _.includes(firstWireCoordinates, `${coordinate[0]},${coordinate[1]}`)
        )
          pathIntersections.push(coordinate);
      }
      secondWireLastCoordinate = [
        secondWireLastCoordinate[0] - distance,
        secondWireLastCoordinate[1]
      ];
    } else if (direction === "U") {
      for (let i = 1; i <= distance; i++) {
        let coordinate = [
          parseInt(secondWireLastCoordinate[0]),
          parseInt(secondWireLastCoordinate[1]) + i
        ];
        if (
          _.includes(firstWireCoordinates, `${coordinate[0]},${coordinate[1]}`)
        )
          pathIntersections.push(coordinate);
      }
      secondWireLastCoordinate = [
        secondWireLastCoordinate[0],
        secondWireLastCoordinate[1] + distance
      ];
    } else if (direction === "D") {
      for (let i = 1; i <= distance; i++) {
        let coordinate = [
          parseInt(secondWireLastCoordinate[0]),
          parseInt(secondWireLastCoordinate[1]) - i
        ];
        if (
          _.includes(firstWireCoordinates, `${coordinate[0]},${coordinate[1]}`)
        )
          pathIntersections.push(coordinate);
      }
      secondWireLastCoordinate = [
        secondWireLastCoordinate[0],
        secondWireLastCoordinate[1] - distance
      ];
    }
  });

  console.log("Progress");

  _.forEach(pathIntersections, function(intersection) {
    const manhattanDistance =
      Math.abs(0 - parseInt(intersection[0])) +
      Math.abs(0 - parseInt(intersection[1]));
    manhattanDistances.push(manhattanDistance);
  });

  manhattanDistances.sort();
  return manhattanDistances[0];
};

module.exports = crossedWires;
