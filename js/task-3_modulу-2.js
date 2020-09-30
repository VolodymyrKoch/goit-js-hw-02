// function findLongestWord(string) {
//   const words = string.split(" ");
//   // console.log(words);
//   let longerWord = words[0];
//   // console.log(longerWord);
//   // console.log(words.length);
//   for (let i = 0; i < words.length; i += 1) {
//     if (words[i] > longerWord.length) {
//       // console.log(words[i]);
//       longerWord = words[i];
//     }
//   }

//   return longerWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// --------------------------------------------------------
// ----------------------------------------------------------
function findLongestWord(string) {
  const words = string.split(" ");
  let longerWord = words[0];
  for (const word of words) {
    if (word.length > longerWord.length) {
      longerWord = word;
    }
  }

  return longerWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
