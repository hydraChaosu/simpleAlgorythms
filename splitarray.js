function splitArr(arr, size) {
  let newArr = [];
  const times = Math.ceil(arr.length / size);
  for (let i = 0; i < times; i++) {
    newArr[i] = arr.slice(size * i, size * (i + 1));
  }
  return newArr;
}

splitArr(["a", "b", "c", "d"], 2);
splitArr([0, 1, 2, 3, 4, 5], 4);
