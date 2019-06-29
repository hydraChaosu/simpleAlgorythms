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

