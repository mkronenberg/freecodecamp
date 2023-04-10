const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M"
}

function rot13(str) {
  const regex = /[A-Z]/g;
  const replacer = (match) => {
    return lookup[match];
  }
  return str.replace(regex, replacer);
}

rot13("SERR PBQR PNZC") //should decode to the string FREE CODE CAMP
rot13("SERR CVMMN!") //should decode to the string FREE PIZZA!
rot13("SERR YBIR?") //should decode to the string FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") //should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.