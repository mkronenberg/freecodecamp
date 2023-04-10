function truthCheck(collection, pre) {

  //Check if the predicate (second argument) is truthy on all elements of a collection (first argument)

  console.log("hello world");

  return pre;
}

truthCheck(
  [
    {
      name: "Quincy", 
      role: "Founder", 
      isBot: false
    }, 
    {
      name: "Naomi", 
      role: "", 
      isBot: false
    }, 
    {
      name: "Camperbot", 
      role: "Bot", 
      isBot: true
    }
  ], 
  "isBot");