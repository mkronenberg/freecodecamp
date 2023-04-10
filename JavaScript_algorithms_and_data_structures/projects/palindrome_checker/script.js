function palindrome(str) {
  // remove non-word characters and underscores
  const regexNonWordCharsAndUnderscores = /\W|\_/g;
  const cleanedStr = str.replace(regexNonWordCharsAndUnderscores, "");
  //console.log(cleanedStr);

  // lowercase everthing
  const lowerCaseStr = cleanedStr.toLowerCase();
  console.log(lowerCaseStr);

  const middlePoint = lowerCaseStr.length / 2;

  // check if string length is even or odd
  if (lowerCaseStr.length % 2 === 0) {
    const firstHalf = lowerCaseStr.slice(0 , middlePoint);
    const seoncdHalfReversed = lowerCaseStr.slice(middlePoint)
                                            .split("")
                                            .reverse()
                                            .join("");
    return (firstHalf === seoncdHalfReversed ? true : false) ;

  }

  else {
    const firstHalf = lowerCaseStr.slice(0 , middlePoint-.5);
    console.log(firstHalf);
    const seoncdHalfReversed = lowerCaseStr.slice(middlePoint+.5)
                                            .split("")
                                            .reverse()
                                            .join("");
    console.log(seoncdHalfReversed);
    return (firstHalf === seoncdHalfReversed ? true : false) ;
  }
}


palindrome("eye") //should return true.
palindrome("_eye") //should return true.
palindrome("race car") //should return true.
palindrome("not a palindrome") //should return false.
palindrome("A man, a plan, a canal. Panama") //should return true.
alindrome("never odd or even") //should return true.
alindrome("nope") //should return false.
palindrome("almostomla") //should return false.
palindrome("My age is 0, 0 si ega ym.") //should return true.
palindrome("1 eye for of 1 eye.") //should return false.
palindrome("0_0 (: /-\ :) 0-0") //should return true.
palindrome("five|\_/|four") //should return false.