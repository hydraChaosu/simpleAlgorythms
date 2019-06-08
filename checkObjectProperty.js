function truthCheck(collection, pre) {
  let result = collection.every(item => {
    // console.log(Object.entries(item), Boolean(item[pre]));
    return item.hasOwnProperty(pre) && Boolean(item[pre]);
  });
  //   console.log(result);
  return result;
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);
truthCheck(
  [
    { user: "Tinky-Winky", sex: "male", age: 0 },
    { user: "Dipsy", sex: "male", age: 3 },
    { user: "Laa-Laa", sex: "female", age: 5 },
    { user: "Po", sex: "female", age: 4 }
  ],
  "age"
);
truthCheck([{ single: "yes" }], "single");
truthCheck([{ single: "double" }, { single: undefined }], "single");
