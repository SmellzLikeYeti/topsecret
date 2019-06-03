var array = [4, 1, 4, 2, 8, 8, 4, 6, 7, 9, 0, 2, 3, 5];

//bubbleSort();
//selectionSort();
//binarySearch(6);
insertionSort();
/**
 * Nasty bubble sort
 */
function bubbleSort() {
  console.log(`Unsorted Array: ${array}`);

  for (var i = array.length - 1; i > 1; i--) {
    for (var j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        swap(j, j + 1);
      }
    }
  }

  console.log(`Sorted Array: ${array}`);
}

/**
 * Selection Sort
 */
function selectionSort() {
  console.log(`Unsorted Array: ${array}`);
  for (var i = 0; i < array.length; i++) {
    var minValue = i;
    for (var j = i; j < array.length; j++) {
      if (array[minValue] > array[j]) {
        minValue = j;
      }
    }
    swap(i, minValue);
  }
  console.log(`Sorted Array: ${array}`);
}

/**
 * Insertion Sort
 */
function insertionSort() {
  console.log(`Unsorted Array: ${array}`);
  for (var i = 0; i < array.length; i++) {
    var j = i;
    var toInsert = array[i];
    while (j > 0 && array[j - 1] > toInsert) {
      array[j] = array[j - 1];
      j--;
    }

    array[j] = toInsert;
  }
  console.log(`Sorted Array: ${array}`);
}

/**
 * Binary Search
 */
function binarySearch(value) {
  var lowIndex = 0;
  var highIndex = array.length - 1;

  while (lowIndex <= highIndex) {
    var middleIndex = Math.trunc((highIndex + lowIndex) / 2);

    if (array[middleIndex] < value) {
      lowIndex = middleIndex + 1;
    } else if (array[middleIndex] > value) {
      highIndex = middleIndex - 1;
    } else {
      console.log(`Found a match for ${value} at index ${middleIndex}`);
      lowIndex = highIndex + 1;
    }
  }
}

/**
 * Sort helper
 * @param {*} index1
 * @param {*} index2
 */
function swap(index1, index2) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}
