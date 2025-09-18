let stack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Task 1: Retrieve a Card from the Stack
let position = 2;
let getItemResult = stack[position];

// Task 2: Exchange a Card in the Stack
let replacementCard = 11;
stack[position] = replacementCard;

// Task 3: Insert a Card at the Top of the Stack
let newCardTop =25;
stack.unshift(newCardTop);

// Task 4: Remove a Card from the Stack
position = 8
stack.splice(position, 1);

// Task 5: Remove the Top Card from the Stack
stack.shift();

// Task 6: Insert a Card at the Bottom of the Stack
newCardBottom = 18;
stack.push(newCardBottom);

// Task 7: Remove a Card from the Bottom of the Stack
stack.pop();

// Task 8: Check the Size of the Stack
let stackSize = 9;
let checkSizeOfStackResult = stack.length === stackSize;

// if (stackSize == stack.length) {
//     checkSizeOfStackResult = true;
// }
// else {
//     checkSizeOfStackResult = false;
// }

console.log(checkSizeOfStackResult)