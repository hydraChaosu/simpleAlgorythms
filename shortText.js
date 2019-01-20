function shortText(str, num) {
  return str.length > num ? str.slice(0, num).concat("...") : str;
}
shortText("my cat like milk", 2);
shortText("my cat like milk", 5);
shortText("milk", 5);
