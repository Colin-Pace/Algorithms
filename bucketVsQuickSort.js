// Bucket sort vs quick sort: quick faster for input one, bucket for input two

const inputOne = [1, 21, 41, 61, 81, 101, 11, 31, 51, 71, 91, 101];
const inputTwo = [];
for (let i = 0; i < 1000; i++) inputTwo.push(Math.floor(Math.random() * 100));

function bucketSort(array, size) {
  let min = array[0];
  let max = array[0];
  array.forEach(itr => {
  	if (itr < min) min = itr;
  	else if (itr > max) max = itr;
  });

  const count = Math.floor((max - min) / size) + 1;
  const buckets = new Array(count);
  const l = buckets.length;
  for (let i = 0; i < l; i++) buckets[i] = [];
  array.forEach(itr => buckets[ Math.floor((itr - min) / size) ].push(itr));

  array.length = 0;
  buckets.forEach(bucket => {
  	quickSort(bucket);
  	bucket.forEach(element => array.push(element));
  });

  return array;
}

console.log("\n");
console.time("\tBucket sort");
bucketSort(inputOne, 10);
//bucketSort(inputTwo, 4);
console.timeEnd("\tBucket sort");

// _____________________________________________

function quickSort(array) {
	if (array.length <= 1) return array;
	else {
		let l = [], r = [], result = [], pivot = array.pop(), len = array.length;
		for (let i = 0; i < len; i++) {
			if (array[i] <= pivot) l.push(array[i]);
			else r.push(array[i]);
		}
		return result.concat(quickSort(l), pivot, quickSort(r));
	}
}

console.log("\n");
console.time("\tQuick sort");
quickSort(inputOne);
//quickSort(inputTwo);
console.timeEnd("\tQuick sort");
console.log("\n");
