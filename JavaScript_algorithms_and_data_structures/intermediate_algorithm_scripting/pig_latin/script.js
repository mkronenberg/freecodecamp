function translatePigLatin(str) {

  // Regex for word beginning with vowel or consonants
  const startVowelsRegex = /^[aeiou]+/;
  const startConsonantsRegex = /^[bcdfghjklmnpqrstvwxyz]+/;
  //console.log(startConsonantsRegex.test(str));

  // If a word begins with a consonant
  if (startConsonantsRegex.test(str)) {

    //console.log(str + " starts with consontants")

    // take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
    let cluster = str.match(startConsonantsRegex).toString();

    return str
            .replace(startConsonantsRegex, "")
            + cluster + "ay";
  }

  // If a word begins with a vowel
  else {

    // just add "way" at the end.
    return str + "way";
  }
}

console.log(translatePigLatin("california")); //should return the string aliforniacay.
console.log(translatePigLatin("paragraphs")); //should return the string aragraphspay.
console.log(translatePigLatin("glove")); //should return the string oveglay.
console.log(translatePigLatin("algorithm")); //should return the string algorithmway.
console.log(translatePigLatin("eight")); //should return the string eightway. 

//Should handle words where the first vowel comes in the middle of the word. 
console.log(translatePigLatin("schwartz")); //should return the string artzschway.

//Should handle words without vowels. 
console.log(translatePigLatin("rhythm")); //should return the string rhythmay.