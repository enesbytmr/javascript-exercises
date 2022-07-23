const ftoc = function(index) {

 let result = (index - 32) * (5/9)
  result = result.toFixed(1)
  result = Number(result);
  return result
};

const ctof = function(index) {
  let result = ((index * 9 ) / 5 ) + 32
  result = result.toFixed(1)
  result = Number(result);
  return result
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
