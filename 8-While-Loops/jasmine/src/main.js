// Task 1: Determine How Long It Takes to Mix a Juice
let juiceName = 'Energizer';
let timeToMixJuiceResult;

if (juiceName == "Pure Strawberry Joy"){
    timeToMixJuiceResult = 0.5;
}
else if (juiceName == "Energizer" || juiceName == "Green Garder"){
    timeToMixJuiceResult = 1.5;
}
else if (juiceName == "Tropical Island"){
    timeToMixJuiceResult = 3;
}
else if (juiceName == "All or Nothing"){
    timeToMixJuiceResult = 5;
}
else{
    timeToMixJuiceResult = 2.5;
}


// Task 2: Replenish the Lime Wedge Supply
let wedgesNeeded = 20;
i = 0;
wedgesCut = 0;
limesCut = 0;
limes = ["small", "large", "medium", "large", "small"]

while(wedgesCut < wedgesNeeded && i < limes.length){
    if (limes[i] == "small"){
        wedgesCut += 6
    }
    else if (limes[i] == "medium"){
        wedgesCut += 8
    }
    else if (limes[i] == "large"){
        wedgesCut += 10
    }
    limesCut++
    i++
}


// Task 3: Finish Up the Shift
let timeLeft = 7;
let totalTime = 0;
let orderIndex = 0
let orders = ["Energizer", "All or Nothing", "Pure Strawberry Joy", "Tropical Island"];
let orderTrack = []

while (totalTime < timeLeft && orderIndex < orders.length){
    if (orders[orderIndex] == "Pure Strawberry Joy"){
        totalTime += 0.5
    }
    else if(orders[orderIndex] == "Energizer" || orders[orderIndex] == "Green Garden"){
        totalTime += 1.5;
    }
    else if(orders[orderIndex] == "Tropical Island"){
        totalTime += 3;
    }
    else if(orders[orderIndex] == "All or Nothing"){
        totalTime += 5;
    }
    else{
        totalTime += 2.5;
    }
    orderIndex += 1;
}

let remainingOrders = []

if(orderIndex < orders.length){
    for (let t = orderIndex; t < orders.length; t++)
    remainingOrders.push(orders[t])
}

console.log(remainingOrders);