const palindromes = function (aString) {
  let revArray = (Array.from(aString.toUpperCase())).reverse();
  let charArrayRevd = revArray.filter(char => char.charCodeAt() >= 65 && char.charCodeAt() <= 90);
  let charArrayStrt = charArrayRevd.slice().reverse();
  let revString = "";
  charArrayRevd.forEach(item => revString += item);
  let strtString = "";
  charArrayStrt.forEach(item => strtString += item);

  if (revString === strtString) {
    return true;
  } else {
    return false;
  }


};

// Do not edit below this line
module.exports = palindromes;
