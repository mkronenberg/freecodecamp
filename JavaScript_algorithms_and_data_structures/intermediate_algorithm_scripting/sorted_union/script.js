function uniteUnique(arr) {
  
  // create a new array
  let uniqueChars = [];

  // loop through the arguements
  for (let index = 0; index < arguments.length; index++) {

    // action for each element of each argument
    arguments[index]
      .forEach((element) => {

        // ensure uniqueChars DOESN'T already have the element
        if (!uniqueChars.includes(element)) {

            // Add the element to uniqueChars
            uniqueChars.push(element);
        }
    });

  }

  return uniqueChars;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); //should return [1, 3, 2, 5, 4]
uniteUnique([1, 2, 3], [5, 2, 1]); //should return [1, 2, 3, 5];
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); // should return [1, 2, 3, 5, 4, 6, 7, 8]
uniteUnique([1, 3, 2], [5, 4], [5, 6]); // should return [1, 3, 2, 5, 4, 6]
uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]); // should return [1, 3, 2, 5, 4]