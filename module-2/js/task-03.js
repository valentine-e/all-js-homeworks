const findLongestWord = function (string) {
  const stringArray = string.split(" ");

  let theLongestWord = "";

  for (const word of stringArray) {
    if (theLongestWord.length < word.length) {
      theLongestWord = word;
    }
  }
  return theLongestWord;

  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
