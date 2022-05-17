const add = function(n1,n2) {
  return n1 + n2;
};

const subtract = function(n1,n2) {
	return n1 - n2;
};

const sum = function(arr) {
	let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum;
};

const multiply = function(arr) {
  let result = 1;
  for(let i = 0; i < arr.length; i++){
    result *= arr[i]
  }
  return result;
};

const power = function(number,exponent) {
	return number ** exponent;
};

const factorial = function(n) {
	let result = 1;
  for(let i = 1; i <= n; i++){
    result *= i;
  }
  return result
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
