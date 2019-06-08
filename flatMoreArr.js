function steamrollArray(arr) {
  const flat = arr => {
    return arr.reduce((acc, curr) => {
      console.log(`accumulator to ${acc}, aktuala wartos to ${curr}`);
      console.log(Array.isArray(curr));
      if (Array.isArray(curr)) {
        curr = flat(curr);
      }
      return acc.concat(curr);
    }, []);
  };
  arr = flat(arr);
  console.log(arr);
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);
