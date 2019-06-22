function palindrome(str) {
  // Good luck!
  const exp = new RegExp(/[.,_:*&$@^=+|?`~!%#-/\\()\s]/g);
  const result = str.replace(exp, "").toLowerCase();
  console.log(
    result,
    result
      .split("")
      .reverse()
      .join(""),
    result ===
      result
        .split("")
        .reverse()
        .join("")
  );
  return (
    result ===
    result
      .split("")
      .reverse()
      .join("")
  );
}

palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /- :) 0-0");
// palindrome("_eye");
// palindrome("not a palindrome")

const numbers = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "DC",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I"
};
