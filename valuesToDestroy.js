function destroyer(arr) {
  const valuesToDestroy = [...arguments].slice(1);
  arr = arr.filter(item => {
    if (!valuesToDestroy.includes(item)) {
      return item;
    }
  });

  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
