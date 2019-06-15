/* 
Ask the user to enter a word. Print out the word in reverse. Repeat. 
*/

// Vanilla JS
function wordReverse(str = prompt("Enter a sentence: ")) {
  let arrayOfString = str.split(" "),
    newSentence = [],
    arrayLength = arrayOfString.length;
  for (let i = arrayLength - 1; i >= 0; i--) {
    const reversedStr = arrayOfString[i]
      .split("")
      .reverse()
      .join("");
    newSentence.push(reversedStr);
  }
  return newSentence;
}
