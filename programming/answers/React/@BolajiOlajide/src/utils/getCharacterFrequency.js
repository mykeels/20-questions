/**
 * Gets the frequency of characters in a string
 * @param {string} string
 */
export function getCharacterFrequency(string) {
  const freq = {};
  const freqArr = [];

  for (let i = 0; i < string.length; i++) {
    const character = string.charAt(i);

    if (freq[character]) {
      freq[character]++;
    } else {
      freq[character] = 1;
    }
  }

  // Can this be also done in the loop above? 🤔
  for (let i = 0; i < string.length; i++) {
    const character = string.charAt(i);
    freqArr.push(freq[character]);
  }

  return freqArr;
}
