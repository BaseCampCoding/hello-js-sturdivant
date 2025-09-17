// Example initial stack of cards (1-10)
let stack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Task 1: Retrieve a card from a stack.
let position; // example position
let getItemResult = stack[position];
// getItemResult holds the card at the given position

// Task 2: Exchange a card in the stack.
position = 4; // example position to exchange
let replacementCard = 11; // example replacement card
stack[position] = replacementCard;
// stack now updated with the replacement card

// Task 3: Insert a card at the top of the stack.
let newCardTop = 12; // example card to insert at top
stack.unshift(newCardTop);
// stack now has newCardTop at the front

// Task 4: Remove a card from the stack.
position = 2; // example position to remove
stack.splice(position, 1);
// stack now has the card at 'position' removed

// Task 5: Remove the top card from the stack.
stack.shift();
// stack now has the top card removed

// Task 6: Insert a card at the bottom of the stack.
let newCardBottom = 13; // example card to insert at bottom
stack.push(newCardBottom);
// stack now has newCardBottom at the end

// Task 7: Remove a card from the bottom of the stack.
stack.pop();
// stack now has the bottom card removed

// Task 8: Check the size of the stack.
let stackSize = 10; // example stack size to check
let checkSizeOfStackResult = stack.length === stackSize;
// checkSizeOfStackResult will be true if the stack has 'stackSize' cards, false otherwise