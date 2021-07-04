function binarySearch(data, value) {
  if (!data || !value) {
    return null;

  } else if (data.length === 1) {
    return data[0];

  } else {
    let left = 0;
    let mid = Math.floor(data.length / 2);;
    let right = data.length - 1;

    while (left != right) {
      if (data[mid] === value) {
        return mid;

      } else if (right - left === 1) {
        if (data[left] === value) {
          return left;

        } else if (data[right] === value) {
          return right;

        } else {
          return null;
        }

      } else {
        if (data[mid] > value) {
          right = mid;
          mid = Math.floor((left + right) / 2);

        } else {
          left = mid;
          mid = Math.floor((left + right) / 2);
        }
      }
    }

    return null;
  }
}

const integers = [1, 2, 3, 4, 5];
console.log(binarySearch(integers, 3));