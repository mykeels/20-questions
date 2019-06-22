/**
 * Takes an array of numbers and 'sums' them according to the
 * Love Calculator Algorithm
 * @param {number[]} arr
 */
export function loveCalculatorSum(arr) {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  const arraySum = [];
  while (startIndex < endIndex) {
    const sum = arr[startIndex] + arr[endIndex];
    // I'm making this assumption because we are only adding single
    // digit numbers so I expect the maximum length of sums to be 2
    if (sum.toString().length === 2) {
      const sumToString = sum.toString();
      arraySum.push(...[Number(sumToString[0]), Number(sumToString[1])]);
    } else {
      arraySum.push(arr[startIndex] + arr[endIndex]);
    }
    startIndex++;
    endIndex--;
  }
  // check if array length is odd. If it is, push
  // the middle element to the end of the array
  if (arr.length % 2 === 1) {
    arraySum.push(arr[startIndex]);
  }
  if (arraySum.length === 2) {
    return arraySum.join('');
  } else {
    return loveCalculatorSum(arraySum);
  }
}
