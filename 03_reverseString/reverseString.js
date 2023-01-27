const reverseString = function (string) {
  const strLength = string.length;
  let reversedString = "";
  for (let i = strLength - 1; i >= 0; i--) {
    reversedString += string.charAt(i);
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
