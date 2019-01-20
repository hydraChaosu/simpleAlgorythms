function repeatString(str, num) {
  return num < 1
    ? ""
    : num == 1
    ? str
    : str.concat(repeatStringNumTimes(str, num - 1));
}

repeatString("aaabc", 3);

// .repeat()
