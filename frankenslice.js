function frankenSplice(arr1, arr2, n) {
  let pre = arr2.slice(n);
  let result = arr2
    .slice(0, n)
    .concat(arr1)
    .concat(pre);
  return result;
}
frankenSplice([1, 2, 3], [4, 5], 1);
frankenSplice([1, 2], ["a", "b"], 1);
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
frankenSplice([1, 2, 3], [4, 5, 6], 1);
