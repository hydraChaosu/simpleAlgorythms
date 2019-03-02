function sumAll(arr) {
  arr.sort((a, b) => a - b);
  let result = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    result = result + i;
  }
  return result;
}

sumAll([1, 4]);
sumAll([10, 4]);
