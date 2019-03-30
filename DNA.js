function pairElement(str) {
  const DNA = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  str = str.split("");
  const result = [];
  for (let value of str) {
    result.push([value, DNA[value]]);
  }
  return result;
}

// pairElement("GCG");
pairElement("ATCGA");
