//return the longest in a provided sentence

function findLongestWordLength(str) {
  let count = 0;
  let max = 0;
  let longestWord = str.split(' ');  // creating array with those words
  for (let i = 0; i < longestWord.length; i++) {
    count = longestWord[i].length;  // storing the current word length
    if (count > max) {  // checking bigger one
      max = count;  // storing current biggest one at max variable
    }
  }
  return max;  // returning the longest word length
}
