// Task 1: Determine if you need a driver's license
let kind = 'car';
let needsLicenseResult;

if(kind === 'car' || kind === 'truck') {
    needsLicenseResult = true;
}
else {
    needsLicenseResult = false;
}

// Task 2: Choose between two potential vehicles to buy
let option1 = 'Toyota';
let option2 = 'Ford';

let chooseVehicleResult;
if (option1 > option2) {
    chooseVehicleResult = option2 + " is clearly the better choice."
}
else {
    chooseVehicleResult = option1 + " is clearly the better choice."
}

// Task 3: Calculate an estimation for the price of a used vehicle
let originalPrice = 10000;
let age = 5;
let calculateResellPriceResult;

if(age < 3) {
    calculateResellPriceResult = originalPrice * 0.8;
}
else if(age > 10) {
    calculateResellPriceResult = originalPrice * 0.5;
}
else if(age >= 3 && age < 10) {
    calculateResellPriceResult = originalPrice * 0.7;
}
