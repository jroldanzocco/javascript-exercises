const repeatString = (str, repeat) => {
  let repeated = "";
  if (repeat < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < repeat; i++) {
      repeated += str;
    }
    return repeated;
  }
};

// Do not edit below this line
module.exports = repeatString;
