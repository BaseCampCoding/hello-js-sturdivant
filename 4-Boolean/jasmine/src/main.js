let knightIsAwake = true;
let archerIsAwake = false;
let prisonerIsAwake = true;
let petDogIsPresent = true;

// Task 1: Fast Attack Availability
let canExectuteFastAttack = !knightIsAwake;

// Task 2: Spy Availability
let canSpy = knightIsAwake || archerIsAwake || prisonerIsAwake;

// Task 3: Signal Prisoner Availability
let canSignalPrisoner = prisonerIsAwake && archerIsAwake;

// Task 4: Free Prisoner 
let canFreePrisoner = petDogIsPresent && !archerIsAwake || !petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake;