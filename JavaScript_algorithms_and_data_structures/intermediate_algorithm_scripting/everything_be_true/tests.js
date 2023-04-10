sdf
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

truthCheck(
  [
    {
      name: "Pikachu", 
      number: 25,
      caught: 3
    },
    {
      name: "Togepi", 
      number: 175, 
      caught: 1
    }
  ], 
  "number");
truthCheck(
    [
    {
        id: 1, 
        data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}
    }, 
    {
        id: 2, 
        data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}
    }, 
    {
        id: null, 
        data: {}
    }
    ]
    , "id") //should return false
