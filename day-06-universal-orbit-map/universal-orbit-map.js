const _ = require("lodash");

const universalOrbitMap = input => {
  const orbitList = input
    .split("\n")
    .map(x => x.trim())
    .map(x => x.split(")"));
  const COM = _.filter(orbitList, function(o) {
    return o[0] === "COM";
  });
  let ring = 1;
  let totalOrbits = 0;
  let currentObjects = [COM[0][1]];
  while (currentObjects.length>0) {
      let listBuilding = [];
      totalOrbits = totalOrbits + (currentObjects.length * ring);
      _.forEach(currentObjects, function(object) {
        let newOrbits = _.filter(orbitList, function(o) {
            return o[0] === object;
        });
        _.forEach(newOrbits, function(object) {
            listBuilding.push(object[1]);
        });
      });
      ring++;
      currentObjects = listBuilding;
  }
  return totalOrbits;
};

module.exports = universalOrbitMap;
