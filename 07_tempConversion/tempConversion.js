function round(value, presicion){
  let multiplicador = Math.pow(10, presicion || 0);
  return Math.round(value * multiplicador) / multiplicador;
}
const ftoc = function(farenheit) {
  return round(((farenheit - 32) * 5/9),1);
};

const ctof = function(celsius) {
  return round(((celsius * 9 / 5) + 32),1);
};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

