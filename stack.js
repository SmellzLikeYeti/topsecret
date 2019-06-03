/**
 * Stack implementation
 */
var stack = [];
var topOfStack = -1;
var stackSize = 10;

for (var i = 0; i < 10; i ++) {
    push(i);
}
//pop();
//peek();

/**
 * Push on the stack
 * @param {{*}} value 
 */
function push(value) {
    if(topOfStack + 1 < stackSize) {
        topOfStack++;
        stack[topOfStack] = value;
    }
    console.log(`${value} was pushed on the stack`);
    console.log(`STACK: ${stack}`);
}

/**
 * Pop off the stack
 */
function pop() {

    if(topOfStack >= 0) {
        console.log(`STACK: ${stack}`);
        console.log(`${stack[topOfStack]} was popped from the stack`);
        stack[topOfStack] = -1;
        topOfStack--;
    } else {
        console.log(`The stack is empty`);
    }
}

/**
 * Peek the top of the stack
 */
function peek() {
    console.log(`${stack[topOfStack]} is at the top of the stack`);
}
