function addTogether() {
  if (arguments.length === 2) {
    const first = arguments[0];
    const second = arguments[1];
    const checkTypes = [first, second].every(item => typeof item === "number");
    if (checkTypes) return first + second;
    console.log(first, second, checkTypes);
  }
  if (arguments.length === 1) {
    const first = arguments[0];
    if (typeof first !== "number") return undefined;
    return function() {
      if (typeof arguments[0] !== "number") return undefined;
      return first + arguments[0];
    };
  }
}

addTogether(2, 3);
addTogether("http://bit.ly/IqT6zt");
addTogether(2, "3");
