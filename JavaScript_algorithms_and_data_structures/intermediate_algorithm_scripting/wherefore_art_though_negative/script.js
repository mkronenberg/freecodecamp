function whatIsInAName(collection, source) {

  // Store the source keys in an array
  const sourceKeys = Object.keys(source);
  //console.log(sourceKeys);

  // initialize an array for collection elements that don't fail any tests
  const noFailuresArr = [];

  collection.forEach(element => {
              
    const failedMatchArr = sourceKeys.filter(key => {
                                        //console.log("source " + key + " is " + source[key]);
                                        //console.log("element " + key + " is " + element[key]);
                                        return source[key] != element[key]
                                      })

    console.log(failedMatchArr);

    if (failedMatchArr.length == 0) {noFailuresArr.push(element)};
                          
  });

  return noFailuresArr;

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