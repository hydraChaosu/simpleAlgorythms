function rot13(str) {
  // LBH QVQ VG!
  let result = "";
  for (let letter in str) {
    let letterNumber = str.charCodeAt(letter);
    if (letterNumber >= 65 && letterNumber <= 77) {
      result += String.fromCharCode(letterNumber + 13);
    } else if (letterNumber >= 78 && letterNumber <= 90) {
      result += String.fromCharCode(letterNumber - 13);
    } else {
      result += String.fromCharCode(letterNumber);
    }
  }

  return result;
}

// Change the inputs below to test
rot13("AMNZ");
rot13(",./?'; ");
console.log(rot13("SERR PBQR PNZC"));
