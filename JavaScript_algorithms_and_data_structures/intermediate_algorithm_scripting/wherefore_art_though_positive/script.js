function whatIsInAName(collection, source) {

  const sourceEntriesArr = Object.entries(source);
  //console.log("source keys are " + sourceKeysArr);
  
  // check whether source entries all appear in the collection object
  const checkEntriesMatch = element => {
    const elementEntriesArr = Object.entries(element);
    console.log(elementEntriesArr)
    const AllEntriesMatch = sourceEntriesArr.every(sourceEntry => {
                                              console.log(sourceEntry);
                                              console.log(elementEntriesArr.includes(sourceEntry));
                                            });
    //console.log("All Entries Match? " + AllEntriesMatch)
    //return AllEntriesMatch;
  }

  // Test every entry value in source for a match in collection element
  /*
  const matchPropValues = element => {

    for (const [key, value] of Object.entries(source)) {
      //console.log(key + " : " + value);
      console.log(key + is + source[0]);
    }

  };
  */

  const matchedObjectArr = collection.filter(checkEntriesMatch);

  console.log(matchedObjectArr);

  // check if all the values for those keys match

}


/*
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" }, 
    { first: "Mercutio", last: null }, 
    { first: "Tybalt", last: "Capulet" }
  ], 
  { last: "Capulet" }
) //should return [{ first: "Tybalt", last: "Capulet" }].

whatIsInAName(
  [
    { "apple": 1 }, 
    { "apple": 1 }, 
    { "apple": 1, "bat": 2 }
  ], 
  { "apple": 1 }
) /* should return [{ "apple": 1 }, 
                    { "apple": 1 }, 
                    { "apple": 1, "bat": 2 }] */

whatIsInAName(
  [
    { "apple": 1, "bat": 2 },
    { "bat": 2 }, 
    { "apple": 1, "bat": 2, "cookie": 2 }
  ], 
  { "apple": 1, "bat": 2 }
) /* should return [{ "apple": 1, "bat": 2 }, 
                    { "apple": 1, "bat": 2, "cookie": 2 }] */

/*                    
whatIsInAName(
  [
    { "apple": 1, "bat": 2 }, 
    { "apple": 1 }, 
    { "apple": 1, "bat": 2, "cookie": 2 }
  ], 
  { "apple": 1, "cookie": 2 }
) //should return [{ "apple": 1, "bat": 2, "cookie": 2 }].

whatIsInAName(
  [
    { "apple": 1, "bat": 2 }, 
    { "apple": 1 }, 
    { "apple": 1, "bat": 2, "cookie": 2 }, 
    { "bat":2 }
  ], 
  { "apple": 1, "bat": 2 }
) /* should return [{ "apple": 1, "bat": 2 }, 
                    { "apple": 1, "bat": 2, "cookie":2 }] */

/*                    
whatIsInAName(
  [{"a": 1, "b": 2, "c": 3}], 
  {"a": 1, "b": 9999, "c": 3}
) //should return []

whatIsInAName(
  [{"a": 1, "b": 2, "c": 3, "d": 9999}], 
  {"a": 1, "b": 9999, "c": 3}
) //should return []
*/