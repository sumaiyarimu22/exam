const arr1 = [1, 4, 6, 7, 8, 9, 5];
const arr2 = [2, 4, 6, 12, 15, 16];

const array3 = [1, 2, 7, 12, 8, 15, 9, 5, 16];

function arraySort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  var middle = Math.floor(arr.length / 2);

  var left = arr.slice(0, middle);
  var right = arr.slice(middle);

  return array(arraySort(left), arraySort(right));
}

function array(left, right) {
  var result = [];
  var il = 0;
  var ir = 0;

  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }
  return result.concat(left.slice(il)).concat(right.slice(ir));
}

console.log(arraySort(array3));
