let ratePerHour = 60;

let dayRate = ratePerHour * 8;

let budget = 1000;

let workdays = Math.floor(budget / dayRate);

let billable = 0;

let fullMonths = 1;

let remainingDays = 13

let monthlyDiscount = 0.2;

let discountedMonthlyRate = dayRate * (22 * (1 - monthlyDiscount));

let remainingCost = remainingDays * dayRate;

let totalProjectCost = (fullMonths * discountedMonthlyRate) + remainingCost;




  