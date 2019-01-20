function stringEndsWith(str, target) {
  return str.lastIndexOf(target) == str.length - target.length ? true : false;
}

stringEndsWith("Catapult", "lt");
stringEndsWith("Catapult", "t");
stringEndsWith("Catapult", "ul");

// .endsWith()

let a = str
  .toLowerCase()
  .split(" ")
  .map(word => word.splice(0, 1, word[0].toUpperString()));
