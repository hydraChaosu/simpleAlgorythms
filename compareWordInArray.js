function compareWordInArray(arr) {
  arr = arr.map(item => item.toLowerCase());
  const values = arr[1].split("");
  const result = values.every(item => arr[0].indexOf(item) != -1);
  return result;
}

compareWordInArray(["hello", "hey"]);
compareWordInArray(["hello", "Hello"]);
//v1
// function compareWordInArray(arr) {
//   arr = arr.map(item => item.toLowerCase());
//   const values = arr[1].split("");
//   const result = values.every(
//     (item, index, array) => arr[0].indexOf(array[index]) != -1
//   );
//   return result;
// }
