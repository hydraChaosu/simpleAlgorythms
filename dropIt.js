function dropElements(arr, func) {
  let result = [];
  arr.some((value, index, arr) => {
    if (func(value)) {
      result = arr.slice(index);
      return true;
    } else {
    }
  });
  console.log(arr);
  console.log(result);
  return result;
}

dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});
// dropElements([0, 1, 0, 1], function(n) {return n === 1;})
