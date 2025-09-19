// 1. Expected Oven Time
const EXPECTED_MINUTES_IN_OVEN = 40;
// 2. Remaining Oven Time
let actualMinutesInOven = 25;
let remainingMinutesInOven = EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
// 3. Preparation Time
var numberOfLayers = 3;
var preparationTimeInMinutes = 2 * numberOfLayers;
// 4. Total Working Time
let totalTimeInMinutes = preparationTimeInMinutes + actualMinutesInOven;
