function allBool(arr) {
  return arr.filter(item => !!item);
}

allBool([7, "ate", "", false, 9]);
allBool(["a", "b", "c"]);

// !item zwróci same false właściwości
// !! zwraca same true

//mozna daz  filter samo Boolean
