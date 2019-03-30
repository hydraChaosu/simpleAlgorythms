function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  const regex = /\s|_/g;
  // aD before D adds space
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
  str = str.replace(regex, "-").toLowerCase();
  console.log(str);
  return str;
}

spinalCase("This Is Spinal Tap");
spinalCase("thisIsSpinalTap");
// spinalCase("The_Andy_Griffith_Show")
