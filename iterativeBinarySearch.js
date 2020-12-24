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

function test() {
  const integers = [];

  while (integers.length < 10) {
    const integer = Math.floor(
      Math.random() * 100
    ) + 1;

    if (integers.includes(integer)) {
      continue;
    } else {
      integers.push(integer);
    }
  }

  integers.sort(function(i, j) {
    return i - j;
  });

  const index = Math.floor(
    Math.random() * 10
  );

  const result = binarySearch(
    integers,
    integers[index]
  );

  if (integers[result] != integers[index]) {
    return false;

  } else {
    return true;
  }
}

for (let i = 0; i < 20; i++) {
  if (test() === false) {
    console.log(0);
    break;

  } else if (test() === true &&
              i === 19) {
                console.log(1);
              }
}
