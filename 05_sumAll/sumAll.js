const sumAll = function (n1, n2) {
  let numberConfirm = typeof n1 === "number" && typeof n2 === "number";
  let sum = 0;
  if (n1 < 0 || n2 < 0 || !numberConfirm) {
    return "ERROR";
  } else {
    for (let i = Math.min(n1, n2); i <= Math.max(n1, n2); i++) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
