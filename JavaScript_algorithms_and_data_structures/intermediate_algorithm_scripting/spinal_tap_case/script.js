function spinalCase(str) {

  // Regex for lowercase followed by an upper case, gives 2 capture groups
  const findCamelCase = /([a-z])([A-Z])/g;

  // Regex for finding spaces and underscores
  const findSpacesDashes = /\s|\_/g;

  return str
          // take a lowercase followed by an upper case and put a space in-between
          .replace(findCamelCase, "$1 $2")
          // replace spaces and underscores with dashes
          .replace(findSpacesDashes, "-")
          .toLowerCase();

}

spinalCase("This Is Spinal Tap") //should return the string "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") //should return the string "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") //should return the string "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") //should return the string "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") //should return the string "all-the-small-things".