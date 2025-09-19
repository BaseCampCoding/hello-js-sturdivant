let knightIsAwake = true;
let archerIsAwake = false;
let prisonerIsAwake = true;
let petDogIsPresent = true;

// Task 1: Fast Attack Availability
let canExectuteFastAttack = !knightIsAwake;
// False
if (knightIsAwake == false) {
    canExectuteFastAttack = true
}
else {
    canExectuteFastAttack = false
}
console.log('Fast Attack: ' + canExectuteFastAttack);

// Task 2: Spy Availability
let canSpy = knightIsAwake || archerIsAwake || prisonerIsAwake;
console.log('Spy: ' + canSpy);
// True

// Task 3: Signal Prisoner Availability
let canSignalPrisoner = prisonerIsAwake && !archerIsAwake;
console.log('Signal Prisoner: ' + canSignalPrisoner);
// True

// Task 4: Free Prisoner 
let canFreePrisoner = (petDogIsPresent && !archerIsAwake) ||
    (!petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake);
console.log('Free Prisoner: ' + canFreePrisoner);
// True
