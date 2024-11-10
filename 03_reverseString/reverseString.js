const reverseString = function(string) {
    const newArray = string.split("");

    for (letter = 0; letter < Math.floor(newArray.length / 2); letter++) {
        const temp = newArray[letter];
        newArray[letter] = newArray[newArray.length - letter - 1];
        newArray[newArray.length - letter - 1] = temp;
    }

    return newArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
