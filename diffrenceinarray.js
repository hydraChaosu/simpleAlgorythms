function diffArray(arr1, arr2) {
  var newArr = arr1.filter(item => {
    if (arr2.indexOf(item) === -1) {
      return item;
    }
  });

  const newArr2 = arr2.filter(item => {
    if (arr1.indexOf(item) === -1) {
      return item;
    }
  });

  console.log(`newArr ${newArr}`);
  console.log(`newArr2 ${newArr2}`);
  return newArr.concat(newArr2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);
