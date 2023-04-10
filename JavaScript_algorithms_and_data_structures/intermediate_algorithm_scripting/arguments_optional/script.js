function addTogether() {
  const argsArr = Object.values(arguments);
  //console.log(argsArr);
  if (argsArr.every(element => typeof element === "number") && argsArr.length === 2) {
    return argsArr[0] + argsArr[1];
  } 

  else if (argsArr.every(element => typeof element === "number") && argsArr.length === 1) {
    return function(b) {
      if (typeof b === "number") {
        //console.log("b is a number")
        return argsArr[0] + b
      }
      else {
        //console.log("b is not a number");
        return undefined;
      }
    }
  }

  else {return undefined;}
}

console.log(addTogether(2, 3)); //should return 5.
console.log(addTogether(23, 30)); //should return 53.
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")); //should return undefined.
console.log(addTogether(2, "3")); //should return undefined.
console.log(addTogether(2)([3])); //should return undefined.
console.log(addTogether("2", 3)); //should return undefined.
console.log(addTogether(5, undefined)); //should return undefined.
console.log(addTogether(5)(7)); //should return 12