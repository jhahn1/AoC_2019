const secureContainer = input => {
    const rangeList = input.split('-').map(x => x.trim()).map(x => parseInt(x));
    let possiblePasswordCount = 0;

    for(let i = rangeList[0]; i<=rangeList[1]; i++) {
        const number = i.toString().split('').map(x => x.trim()).map(x => parseInt(x));
        if(passesConditions(number)){
            possiblePasswordCount++;
        }
    }
    return possiblePasswordCount;
}

const passesConditions = digits => {
    let hasRepeatingDigit = false;

    for(let i = 1; i<digits.length; i++) {
        if(digits[i]<digits[i-1]){
            return false;
        } else {
            if(digits[i] === digits[i-1]) {
                hasRepeatingDigit = true;
            }
        }
    }

    if(hasRepeatingDigit) {
        return true;
    } else {
        return false;
    }
}

module.exports = secureContainer;