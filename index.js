function produceDrivingRange(range) {
    return function(blockRange) {
        
        var result = (blockRange[1] - blockRange[0]);
        var difference = (range - result);
        if ((difference) > 0) {
            return `within range by ${result}`;
        } else {
            return `${Math.abs(difference)} blocks out of range`;
            }
    };
}