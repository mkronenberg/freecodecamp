const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function() {return firstAndLast;};
  this.getFirstName = function() {
                        return firstAndLast
                                .split(" ")[0];
                      };
  this.getLastName = function() {
                        return firstAndLast
                                .split(" ")[1];
                      };
  this.setFirstName = function(first) {
                        firstAndLast = firstAndLast.replace(/^[A-Za-z]+/, first);
                      };
  this.setLastName = function(last) {
                        firstAndLast = firstAndLast.replace(/[A-Za-z]+$/, last);
                      };
  this.setFullName = function(fullName) {
                        firstAndLast = fullName;
                      }
  
};

const bob = new Person('Bob Ross');
console.log("is bob an instance of Person? " + (bob instanceof Person));
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());
bob.setFirstName("Haskell")
console.log(bob.getFullName());
console.log("There are " + Object.keys(bob).length + " Properties")