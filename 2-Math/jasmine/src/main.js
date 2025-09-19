// Task 1: Calculate the Day Rate
let ratePerHour = 60;
let dayRate = ratePerHour * 8;

// Task 2: Calculate the Number of Workdays for a Budget
const budget = 1000;
let workdays = Math.floor(budget / dayRate);

// Task 3: Calculate the Discounted Rate for Large Projects
let billable = 22;
let monthlyDiscount = (billable * dayRate) * 0.2;
let fullMonths = Math.floor(35 / billable);
let remainingDays = 35 - billable;
let discountedMonthlyRate = billable * dayRate - monthlyDiscount;
let remainingCost = remainingDays * dayRate;
let totalProjectCost = Math.ceil(discountedMonthlyRate + remainingCost);
