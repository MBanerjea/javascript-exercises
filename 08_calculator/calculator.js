const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return result = array.reduce((sum, current) => sum + current, 0);
};

const multiply = function (array) {
  return result = array.reduce((product, current) => product * current, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  if (a === 0 || a === 1) {
    return 1
  } else {
    let fact = 1;
    for (let i = 1; i <= a; i++) {
      fact *= i;
    }
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
