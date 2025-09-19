let juiceName = "Energizer";
let timeToMixJuiceResults;

if (juiceName === "Pure Strawberry Joy") {
  timeToMixJuiceResults = 0.5;
}
else if (juiceName === "Energizer" || juiceName === "Green Garden") {
    timeToMixJuiceResults = 1.5;
}
else if (juiceName === "Tropical Island") {
  timeToMixJuiceResults = 3;
}
else if (juiceName === "All or Nothing") {
  timeToMixJuiceResults = 5;
}
else {
  timeToMixJuiceResults = 2.5;
}
console.log(timeToMixJuiceResults);

//Task 2
let wedgesNeeded;
limes = ["small", "large", "medium", "large", "small"];
wedgesCut = 0
limesCut = 0

while (wedgesCut < wedgesNeeded && limesCut < limes.length) {
  if (limes[limesCut] === "small") {
    wedgesCut += 6;
  }
  else if (limes[limesCut] === "medium") {
    wedgesCut += 8;
  }
  else if (limes[limesCut] === "large") {
    wedgesCut += 10;
  }
  limesCut++;
  i++
}

//Task 3
let timeLeft = 4;
let orders = ["Energizer", "All or Nothing", "Green Garden", "Tropical Island", "Pure Strawberry Joy"];
let totalTime = 0;
let index = 0;

for (let i = 0; i < orders.length; i++) {
    let juice = orders[i];

  if (juice === "Pure Strawberry Joy") {
    timeToMixJuiceResults = 0.5;
  }
  else if (juice === "Energizer" || juice === "Green Garden") {
      timeToMixJuiceResults = 1.5;
  }
  else if (juice === "Tropical Island") {
    timeToMixJuiceResults = 3;
  }
  else if (juice === "All or Nothing") {
    timeToMixJuiceResults = 5;
  }
  else {
    timeToMixJuiceResults = 2.5;
  }
        orders.push(juice);  
    totalTime -= timeToMixJuiceResults;
}


while (totalTime > timeLeft && orders.length > 0) {

}