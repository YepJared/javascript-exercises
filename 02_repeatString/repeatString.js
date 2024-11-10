const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    
    let repeatedString = '';

    for (let repetition = 0; repetition < num; repetition++) {
        repeatedString += string;
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
