function editString(str) {
  const regex = /\w/;
  return str
    .toLowerCase()
    .split(" ")
    .map(item => item.replace(regex, item[0].toUpperCase()))
    .join(" ");
}

editString("I'm a little tea pot");
editString("HERE IS MY HANDLE HERE IS MY SPOUT");
