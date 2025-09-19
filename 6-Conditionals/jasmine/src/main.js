//Task 1
let kind = "car"

let needsLicenseResult;

if (kind === "car" || kind === "truck" || kind === "motorcycle") {
  needsLicenseResult = true;
} else {
  needsLicenseResult = false;
}

// Task 2
const option1 = "Hyundai";

const option2 = "Jeep";

let chosenVehicle;
if (option1.localeCompare(option2) < 0) {
  chosenVehicle = option1;
} else {
  chosenVehicle = option2;
}

let chooseVehicleResult = `${chosenVehicle} is clearly the better choice.`;

// Task 3
let originalPrice = 25000;
let age = 5;
let calculateResellPriceResult;

if (age < 3) {
  calculateResellPriceResult = originalPrice * 0.80;
} else if (age > 10) {
  calculateResellPriceResult = originalPrice * 0.50;
} else {
  calculateResellPriceResult = originalPrice * 0.70;
}



