function findLongestWordLength(str) {
  return str.split(" ").sort((a, b) => b.length - a.length)[0].length;
}

findLongestWordLength(
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, facilis molestias! Placeat eveniet quidem blanditiis accusantium eaque, illo aut ducimus fugit optio eligendi, porro reprehenderit at, eius voluptatem illum laudantium!"
);
