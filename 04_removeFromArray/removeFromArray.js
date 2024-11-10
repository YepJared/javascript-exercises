function removeArrayElement(array, num) {
    for (i = 0; i < array.length; i++) {
        if (array[i] === num) {
            while (array[i] === num) {
                array.splice(i, 1);
            }
        }
    }

    return array
}

const removeFromArray = function(array, ...args) {
    for (let i = 0; i < args.length; i++) {
        array = removeArrayElement(array, args[i]);
    }

    return array
};

// Do not edit below this line
module.exports = removeFromArray;
