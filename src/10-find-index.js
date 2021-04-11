/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let n; let m;
  if (value <= array.length / 2) {
    for (let i = 0; i < array.length; i++) {
      n = array[i];
      if (n === value) {
        m = i;
        break;
      }
    }
  } else {
    for (let i = array.length - 1; i >= 0; i--) {
      n = array[i];
      if (n === value) {
        m = i;
        break;
      }
    }
  }
  return m;
}

module.exports = findIndex;
