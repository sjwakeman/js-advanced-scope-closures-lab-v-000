function produceDrivingRange(range) {
    return function(blockRange) {
        
        var result = (blockRange[1] - blockRange[0]);
        var difference = (result - range);
        if (result <= range) {
            return `within range by ${result}`;
        } else {
           
            return `${${Math.abs(difference)} blocks out of range`;
            }
    };
}