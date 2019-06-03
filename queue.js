var queue;
var queueSize;
var front = 0;
var rear = 0;
var numberOfItems = 0;

createQueue(10);
for (var i = 0; i < queueSize; i++) {
  insert(i);
}

//insertPriority(9);
//insertPriority(11);
//insertPriority(8);

console.log(queue);

remove();
peek();

function createQueue(size) {
  queueSize = size;
  queue = [queueSize];
}

function insert(value) {
  if (numberOfItems + 1 <= queueSize) {
    queue[rear] = value;
    rear++;
    numberOfItems++;
    console.log(`${value} added to the queue`);
    console.log(`QUEUE: ${queue}`);
  } else {
    console.log(`Queue is full`);
  }
}

function insertPriority(value) {
  var i;
  if (numberOfItems === 0) {
    insert(value);
  } else {
    for (i = numberOfItems - 1; i >= 0; i--) {
      if (value > queue[i]) {
        queue[i + 1] = queue[i];
      } else {
        break;
      }
    }

    queue[i + 1] = value;
    rear++;
    numberOfItems++;
  }
}

function remove() {
  if (numberOfItems > 0) {
    console.log(`${queue[front]} was removed from the queue`);
    queue[front] = "-1";
    front++;
    numberOfItems--;
  } else {
    console.log(`The queue is empty`);
  }
}

function peek() {
  console.log(`${queue[front]} is the first in the queue`);
}
