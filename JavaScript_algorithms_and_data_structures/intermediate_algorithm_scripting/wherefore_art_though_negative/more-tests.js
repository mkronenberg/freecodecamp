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

whatIsInAName(
  [{"a": 1, "b": 2, "c": 3}], 
  {"a": 1, "b": 9999, "c": 3}
) //should return []

whatIsInAName(
  [{"a": 1, "b": 2, "c": 3, "d": 9999}], 
  {"a": 1, "b": 9999, "c": 3}
) //should return []