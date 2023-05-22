const fibonacci = function (number) {
  let arr = [1, 1];
  let indexToBeFilled = +number - 1;
  if (+number < 1) {
    return "OOPS";
  }
  for (let i = 2; i < number; i++) {
    let arrLength = arr.length;
    let num1 = arr[arrLength - 1];
    let num2 = arr[arrLength - 2];
    arr.push(num1 + num2);
  }
  return arr[indexToBeFilled];
};

// Do not edit below this line
module.exports = fibonacci;
