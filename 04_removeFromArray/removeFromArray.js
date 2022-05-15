const removeFromArray = function () {
  let arr = arguments[0];
  let index;
  for (let i = 1; i < arguments.length; i++) {
    index = arr.indexOf(arguments[i]);
    if (arr.includes(arguments[i])) {
      arr.splice(index, 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
