function produceDrivingRange(range) {
    return function(startBlock, endBlock) {
        
        var result = (parseInt(endBlock) - parseInt(startBlock));
        var difference = (range - result);
        if (result <= range) {
            return `within range by ${result}`;
        } else {
           
            return `${Math.abs(difference)} blocks out of range`;
            }
    };
}

function produceTipCalculator() {
    return function(tip) {
        return tip * .1;
    };
}
    const tenPercentTip = produceTipCalculator(10);

function createDriver() {
let DriverId = 0;
    // return the class
    return class {
        constructor(name) {
        this.name = name;
        this.id = ++DriverId;
        }
    }
}