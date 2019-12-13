const _ = require("lodash");

const universalOrbitMap = input => {
    const orbitList = input
        .split("\n")
        .map(x => x.trim())
        .map(x => x.split(")"));
    let santaObjectList = _.filter(orbitList, function(o) {
        return o[1] === "SAN";
    });
    let santasPath = [];
    while(santaObjectList.length>0) {
        let currentObject = santaObjectList[0][0];
        santasPath.push(currentObject);
        let newObjectList = _.filter(orbitList, function(o) {
            return o[1] === currentObject;
        });
        santaObjectList = newObjectList;
    }
    let myPath = [];
    let myObjectList = _.filter(orbitList, function(o) {
        return o[1] === "YOU";
    });
    while(myObjectList.length>0) {
        let currentObject = myObjectList[0][0];
        myPath.push(currentObject);
        let newObjectList = _.filter(orbitList, function(o) {
            return o[1] === currentObject;
        });
        myObjectList = newObjectList;
    }
    for(let i = 0; i<santasPath.length; i++ ) {
       const myIndex = _.indexOf(myPath, santasPath[i]);
       if(myIndex !== -1) {
           return myIndex + i;
       }
    };
};

module.exports = universalOrbitMap;