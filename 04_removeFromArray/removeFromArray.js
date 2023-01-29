const removeFromArray = function (array, ...theArgs) {
  for (let arg of theArgs) {
    for (let i = 0; i < array.length; i++) {
      if (arg === array[i]) {
        array.splice(i, 1);
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
