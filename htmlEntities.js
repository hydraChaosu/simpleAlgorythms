function convertHTML(str) {
  const regex = [/&/gi, /</gi, />/gi, /\'/gi, /"/gi];
  str = str.replace(regex[0], "&amp;");
  str = str.replace(regex[1], "&lt;");
  str = str.replace(regex[2], "&gt;");
  str = str.replace(regex[3], "&apos;");
  str = str.replace(regex[4], "&quot;");
  console.log(str);
  return str;
}

convertHTML("Dolce & Gabbana");
