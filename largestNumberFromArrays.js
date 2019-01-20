function largestNumberFromArrays(arr) {
  return arr.map(item =>
    item.reduce((prev, next) => {
      return Math.max(prev, next);
    })
  );
}

largestNumberFromArrays([
  [2, 3, 4, 5],
  [-2, 3, 5657, 7],
  [435, 65, 346, 3],
  [-23, -345, -4, -41]
]);
