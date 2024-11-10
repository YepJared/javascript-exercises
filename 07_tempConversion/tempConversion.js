const convertToCelsius = function(fahrenheit) {
  const calculatedTemp = (fahrenheit - 32) * (5 / 9);
  return Number.isInteger(calculatedTemp) ? calculatedTemp : Number(calculatedTemp.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  const calculatedTemp = celsius * (9 / 5) + 32;
  return Number.isInteger(calculatedTemp) ? calculatedTemp : Number(calculatedTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
