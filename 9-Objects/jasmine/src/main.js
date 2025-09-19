// Task 1: Create a New High Score Board
const scoreboard = {
    'The Best Ever' : 1000000
};

// Task 2: Add Players to the Score Board
let newPlayerName = 'Aleah';
let newPlayerScore = 0;
scoreboard[newPlayerName] = newPlayerScore;

console.log(scoreboard);

// Task 3: Remove Players from the Score Board
let playerToRemove = 'Aleah'
delete scoreboard[playerToRemove];

console.log(scoreboard);

// Task 4: Increase a Player's Score
scoreboard[newPlayerName] = newPlayerScore;
let playerNameToUpdate = 'Aleah';
let scoreToAdd = 5;
scoreboard[playerNameToUpdate] = scoreboard[newPlayerName] + scoreToAdd;

console.log(scoreboard);

// Task 5: Apply Monday Bonus Points
let mondayBonus = 100;
for (let key in scoreboard) {
    scoreboard[key] += mondayBonus;
}

console.log(scoreboard);