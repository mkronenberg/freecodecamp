// nested array of numerals
const numeralRef = [
  // Single digits 1 to 9
  ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  // Tens digits 10 to 90
  ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
  // Hounreds digits 100 to 900
  ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
  // Thousands digits 1000 to 3000
  ["", "M", "MM", "MMM"]
]

function convertToRoman(num) {
  // create and array of characters in reverse order
  const reverseArr = num.toString()
                        .split("")
                        .reverse()
                        .map(element => Number(element));
  
  // Initialize an array for the numeral still in reverse order
  const reverseNumeralArr = []

  // loop through the reverse character array, each time moving one digit array up
  for (let reverseArrIndex = 0, numeralRefRow = 0; reverseArrIndex < reverseArr.length; reverseArrIndex++, numeralRefRow++) {
    const element = reverseArr[reverseArrIndex];
    const numeral = numeralRef[numeralRefRow][element];
    
    reverseNumeralArr.push(numeral);
  }

  // reverse order again back to correct orientation and join strings
  return reverseNumeralArr.reverse()
                          .join("");
}

convertToRoman(2) //should return the string II.
convertToRoman(3) //should return the string III.
convertToRoman(4) //should return the string IV.
convertToRoman(5) //should return the string V.
convertToRoman(9) //should return the string IX.
convertToRoman(12) //should return the string XII.
convertToRoman(16) //should return the string XVI.
convertToRoman(29) //should return the string XXIX.
convertToRoman(44) //should return the string XLIV.
convertToRoman(45) //should return the string XLV.
convertToRoman(68) //should return the string LXVIII
convertToRoman(83) //should return the string LXXXIII
convertToRoman(97) //should return the string XCVII
convertToRoman(99) //should return the string XCIX
convertToRoman(400) //should return the string CD
convertToRoman(500) //should return the string D
convertToRoman(501) //should return the string DI
convertToRoman(649) //should return the string DCXLIX
convertToRoman(798) //should return the string DCCXCVIII
convertToRoman(891) //should return the string DCCCXCI
convertToRoman(1000) //should return the string M
convertToRoman(1004) //should return the string MIV
convertToRoman(1006) //should return the string MVI
convertToRoman(1023) //should return the string MXXIII
convertToRoman(2014) //should return the string MMXIV
convertToRoman(3999) //should return the string MMMCMXCIX