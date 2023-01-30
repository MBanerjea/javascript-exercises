const sumAll = function (num1, num2) {
  let sum = 0;
  // console.log(typeof num1);
  if (typeof num1 != "number" || num1 < 0 || typeof num2 != "number" || num2 < 0) {
    return "ERROR";
  } else {
    if (num1 < num2) {
      for (let i = num1; i <= num2; i++) {
        sum += i;
      }
    } else if (num2 < num1) {
      for (let i = num2; i <= num1; i++) {
        sum += i;
      }
    } else {
      sum = num1;
    }
    return sum;
  }

};

// Do not edit below this line
module.exports = sumAll;
