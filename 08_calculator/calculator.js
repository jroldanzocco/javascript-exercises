const add = (n1,n2) => n1 + n2;

const subtract = (n1,n2) => n1 - n2;

const sum = arr => arr.reduce((a,b) => a + b, 0)

const multiply = arr => arr.reduce((a,b) => a * b)

const power = (number,exp) => number ** exp;

const factorial = n => {
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
