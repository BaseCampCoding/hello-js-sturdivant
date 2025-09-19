// Task 1
let stack = [3, 5, 7, 9, 1, 6, 5];
let position = 1
let getItemResult = stack[position];


//Task 2
position = 6;
replacementCard = 17
stack[position] = replacementCard;
console.log(stack[6]);

//Task 3
let newCardTop=25;
stack.unshift(newCardTop);
console.log(stack);

//Task 4
position = 8;
stack.splice(position,1);
console.log(stack);

//Task 5
stack.shift();
console.log(stack);

//Task 6
let newCardBottom=18;
stack.push(newCardBottom);
console.log(stack);

//Task 7
stack.pop();
console.log(stack);

//Task 8
let stackSize = stack.length;
let checkSizeOfStackResult = stackSize == stack.length