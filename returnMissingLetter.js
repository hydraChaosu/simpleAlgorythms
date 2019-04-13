function fearNotLetter(str) {
  const BEGIN = str.charCodeAt(0);
  const END = str.charCodeAt(str.length - 1);
  let helper = 0;
  for (let i = BEGIN; i <= END; i++) {
    if (i !== str.charCodeAt(helper)) {
      return String.fromCharCode(i);
    }
    helper++;
  }
  return;
}

fearNotLetter("abce");
fearNotLetter("abcdefghijklmnopqrstuvwxyz");
fearNotLetter("abcdefghjklmno");
// should return undefined.
