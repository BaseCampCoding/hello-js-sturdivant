let line = "Stands so high";

let frontDoorLetter = line[0]; 

let frontDoorWord = "shire";

let firstLetter = frontDoorWord[0].toUpperCase();

let restOfWord = frontDoorWord.slice(1).toLowerCase();

let frontDoorPassword = firstLetter + restOfWord; 

let lineWithWhitespace = "Reins and harness  ";

let backDoorLetter = lineWithWhitespace.trim().at(-1); 

let backDoorWord = "horse";

let capitalizedWord = backDoorWord[0].toUpperCase() + backDoorWord.slice(1).toLowerCase();

let backDoorPassword = capitalizedWord + ", please"; 


