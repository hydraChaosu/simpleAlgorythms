var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let firstName = firstAndLast.split(" ")[0];
  let lastName = firstAndLast.split(" ")[1];
  this.getFullName = function() {
    return firstName + " " + lastName;
  };
  this.setFullName = function(name) {
    firstName = name.split(" ")[0];
    lastName = name.split(" ")[1];
  };
  this.getFirstName = function() {
    return firstName;
  };
  this.setFirstName = function(name) {
    firstName = name;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.setLastName = function(name) {
    lastName = name;
  };
};

var bob = new Person("Bob Ross");

console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
bob.setFirstName("Haskell");
console.log(bob.getFullName());
bob.setLastName("Curry");
console.log(bob.getFullName());
bob.setFullName("Haskell Curry");
console.log(bob.getFullName());
