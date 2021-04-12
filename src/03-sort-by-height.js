/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr; const
    result = [];
  newArr = arr.filter((el) => el !== -1);
  newArr = newArr.sort((a, b) => a - b);
  for (let i = 0, j = 0; j < arr.length; j++) {
    if (arr[j] === -1) {
      result.push(-1);
    } else {
      result.push(newArr[i]);
      i++;
    }
  }
  return result;
}

module.exports = sortByHeight;
