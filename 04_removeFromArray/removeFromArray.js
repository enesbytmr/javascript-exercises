const removeFromArray = (arr, ...manyArgs) => {
  let result = [];
 result = arr.filter(item => !manyArgs.includes(item))
    return result
};

removeFromArray([1, 2, 3, 4, 5, 6], 3,2);

// Do not edit below this line
module.exports = removeFromArray;
