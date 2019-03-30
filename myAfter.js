function myReplace(str, before, after) {
  const regex = new RegExp(before, "gi");
  let myafter = [...after];
  if (before[0] == before[0].toUpperCase()) {
    myafter[0] = myafter[0].toUpperCase();
  }
  myafter = myafter.join("");
  return str.replace(regex, myafter);
}

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
