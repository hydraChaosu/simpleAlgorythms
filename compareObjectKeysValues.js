function whatIsInAName(collection, source) {
  var arr = [];
  const sourceKeys = Object.keys(source);
  // console.log(Object.keys(source))
  // console.log(sourceKeys[1])
  // console.log(source[sourceKeys])

  arr = collection.filter(item => {
    let flagcount = 0;
    if (sourceKeys.length === 1) {
      if (item[sourceKeys] === source[sourceKeys]) {
        return item;
      }
    } else {
      for (let i = 0; i < sourceKeys.length; i++) {
        // console.log(
        //   `${sourceKeys[i]} is ${item[sourceKeys[i]] === source[sourceKeys[i]]}`
        // );
        //  console.log(item[sourceKeys[i]] === source[sourceKeys[i]])
        if (item[sourceKeys[i]] === source[sourceKeys[i]]) {
          flagcount++;
        }
      }
      if (flagcount >= sourceKeys.length) {
        return item;
      }
    }
  });

  console.log(arr);
  return arr;
}

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
);
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]
