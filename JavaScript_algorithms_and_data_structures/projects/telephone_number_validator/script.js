function telephoneCheck(str) {

  // Regex explaination
    // Step1: Optional - begin with a 1 or 1 and space
    // Step2: 3 digits with optional parethesis: ### or (###)
    // Step3: Optional - Space or dash
    // Step4: end with 3 digits dash 4 digits |or| 3 digits space 4 digits |or| 7 digits
    // Important to include end marker to exclude strings greater than 7
  const teleRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)(\d{3}\-\d{4}|\d{3}\s\d{4}|\d{7})$/;

  return (str.search(teleRegex) != -1) ? true: false;

}

// True Tests
telephoneCheck("555-555-5555") //should return a true.
telephoneCheck("1 555-555-5555") //should return true.
telephoneCheck("1 (555) 555-5555") //should return true.
telephoneCheck("5555555555") //should return true.
telephoneCheck("555-555-5555") //should return true.
telephoneCheck("(555)555-5555") //should return true.
telephoneCheck("1(555)555-5555") //should return true.
telephoneCheck("1 555 555 5555") //should return true.
telephoneCheck("1 456 789 4444") //should return true.

// False Tests
telephoneCheck("123**&!!asdf#") //should return false.
telephoneCheck("55555555") //should return false.
telephoneCheck("(6054756961)") //should return false.
telephoneCheck("2 (757) 622-7382") //should return false.
telephoneCheck("0 (757) 622-7382") //should return false.
telephoneCheck("-1 (757) 622-7382") //should return false.
telephoneCheck("2 757 622-7382") //should return false.
telephoneCheck("10 (757) 622-7382") //should return false.
telephoneCheck("27576227382") //should return false.
telephoneCheck("(275)76227382") //should return false.
telephoneCheck("2(757)6227382") //should return false.
telephoneCheck("2(757)622-7382") //should return false.
telephoneCheck("555)-555-5555") //should return false.
telephoneCheck("(555-555-5555") //should return false.
telephoneCheck("(555)5(55?)-5555") //should return false.
telephoneCheck("55 55-55-555-5") //should return false.
telephoneCheck("11 555-555-5555") //should return false.
telephoneCheck("555-5555") //should return false.
telephoneCheck("5555555") //should return false.
telephoneCheck("1 555)555-5555") //should return false.

// True Tests
/*
555-555-5555
1 555-555-5555
1 (555) 555-5555
5555555555
555-555-5555
(555)555-5555
1(555)555-5555
1 555 555 5555
1 456 789 4444
*/

// False Tests
/*
123**&!!asdf#
55555555
(6054756961)
2 (757) 622-7382
0 (757) 622-7382
-1 (757) 622-7382
2 757 622-7382
10 (757) 622-7382
27576227382
(275)76227382
2(757)6227382
2(757)622-7382
555)-555-5555
(555-555-5555
(555)5(55?)-5555
55 55-55-555-5
11 555-555-5555
555-5555
5555555
1 555)555-5555
*/