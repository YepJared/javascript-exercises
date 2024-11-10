const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    if (Math.floor(num1) != num1 || Math.floor(num2) != num2) {
        return 'ERROR';
    }

    if (typeof num1 != typeof 1 || typeof num2 != typeof 1) {
        return "ERROR";
    }
    
    let sum = 0;
    let start = 0;
    let end = 0;
    
    if (num1 <= num2) {
        start = num1;
        end = num2;
    } else {
        start = num2;
        end = num1;
    }


    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
