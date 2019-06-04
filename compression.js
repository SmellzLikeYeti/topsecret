var stringContainer = [];

var input = "5[2[3[a]1[b]]";
workInward(input);

//console.log(decompressedString);
//convert to array

var inputArray = [];
inputArray.push(input);




function workInward(input) {
  var start = 0;
  var end = input.length - 1;
  var printCount = 0;
  while (start < end) {
    // We have a number
    if (!isNaN(input[start])) {
      printCount += input[start];
      start++;
    } else if (input[start] === "[" && input[end] === "]") {
        var split = printSub(
        parseInt(printCount),
        input.substring(start + 1, input.length)
      );
      console.log(stringContainer);
      start = 156;
    }
  }
}

function printSub(count, input) {
  if (count === 1) {
    return input;
  } else {
    return input + "," + printSub(count - 1, input);
  }
}
