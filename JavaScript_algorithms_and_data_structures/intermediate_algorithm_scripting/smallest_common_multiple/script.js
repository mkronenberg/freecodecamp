function smallestCommons(arr) {
  
  // Get min and max values from Array
    const min = Math.min(...arr);
    const max = Math.max(...arr);

  // Create an array of every number in range
    const rangeArr = [];
    
    for (let i = min; i <= max; i++) {
      rangeArr.push(i);
    }
    //console.log(rangeArr);

  // Get a maximum value for common demoninator
    const commonCeiling = rangeArr.reduce(
      (accumulator, currentValue) => accumulator * currentValue,
      1
    );
    console.log("test ceiling is " + commonCeiling);

  // Loop through multiples of max value until all numbers in range are divsible
  for (let testIndex = 1, testValue = max; testIndex <= (commonCeiling/max), testValue <= commonCeiling; testIndex++, testValue = (max*testIndex) ) {
    //const element = array[index];
    console.log("test index is " + testIndex);
    console.log("test value is " + testValue);
    if (rangeArr.every(element => testValue % element === 0)) {
      return testValue;
    }
  }

}


smallestCommons([1, 5]); //should return 60 //should return a number
//smallestCommons([5, 1]); //should return 60
//smallestCommons([2, 10]); //should return 2520
//smallestCommons([1, 13]); //should return 360360
//smallestCommons([23, 18]); //should return 6056820