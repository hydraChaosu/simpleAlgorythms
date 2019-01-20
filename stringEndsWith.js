function stringEndsWith(str, target) {
  return str.lastIndexOf(target) == str.length - target.length ? true : false;
}

stringEndsWith("Catapult", "lt");
stringEndsWith("Catapult", "t");
stringEndsWith("Catapult", "ul");

// .endsWith()
