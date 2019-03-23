function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  // str.split(' ').join('-')

  const regex = /\s|_/g;
  // const regex2 = /(?=[A-Z])/
  // console.log(str.match(/[A-Z][a-z]+/g).join(' ').toLowerCase())
  // str = str.match(/[A-Z][a-z]+/g).join(' ').toLowerCase()
  // // console.log(str.split(regex2).join('').toLowerCase())
  console.log(
    str
      .split(regex)
      .join("-")
      .toLowerCase()
  );
  str = str
    .split(regex)
    .join("-")
    .toLowerCase();
  return str;
}

// spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
// spinalCase("The_Andy_Griffith_Show")

//   The tricky part is getting the regular expression part to work, once you do that then just turn the uppercase to lowercase and replace spaces with underscores using replace().
