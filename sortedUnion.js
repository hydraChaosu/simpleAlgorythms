function uniteUnique(arr) {
  const result = [];
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      const store = arguments[i];
      if (!result.includes(store[j])) {
        result.push(store[j]);
      }
    }
  }
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
