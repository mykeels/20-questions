/**
 * Takes an array of strings that represent the scores of students
 * and computes the CGPA
 * @param {string[]} arr
 */
export function calculateCGPA(arr) {
  return arr.map(el => {
    const data = el.split(',');
    const [id, name, ...scores] = data;

    const intScores = scores.map(score => Number(score));

    const average = intScores.reduce((a, b) => a + b, 0) / intScores.length;

    // calculate CGPA
    const temp = scores.map(score => score / 20);
    const CGPA = temp.reduce((a, b) => a + b, 0) / temp.length;

    return {
      id,
      name,
      average,
      CGPA,
    };
  });
}
