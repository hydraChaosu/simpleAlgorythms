//in which index will be number after soring
function getIndexToIns(arr, num) {
  if (arr.length == 0) return 0;
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      console.log(i);
      return i;
    }

    if (i == arr.length - 1 && num > arr[arr.length - 1]) {
      console.log(i + 1);
      return i + 1;
    }
  }
  return num;
}
getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([2, 5, 10], 15);
