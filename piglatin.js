function translatePigLatin(str) {
  const vovels = ["a", "e", "i", "o", "u"];

  let firstVowelIndex;
  for (let i = 0; i < str.length; i++) {
    if (vovels.includes(str[i])) {
      firstVowelIndex = i;
      break;
    }
  }

  if (firstVowelIndex === 0) {
    return str + "way";
  } else if (firstVowelIndex === -1) {
    return str + "ay";
  } else {
    str = [...str];
    const startPart = str.splice(0, firstVowelIndex);
    str = str
      .concat(startPart)
      .concat("ay")
      .join("");
    console.log(str);
    console.log(startPart);
  }

  console.log(firstVowelIndex);

  return str;
}

// translatePigLatin("consonant");
// translatePigLatin("eight")
translatePigLatin("dgh");
