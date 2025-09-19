// Task 1: Determine How Long It Takes to Mix a Juice
let juiceName = 'Pure Strawberry Joy'
let timeToMixJuiceResult;

if (juiceName === 'Pure Strawberry Joy') {
    timeToMixJuiceResult = 0.5;
}
else if (juiceName === 'Energizer' || juiceName === 'Green Garden') {
    timeToMixJuiceResult = 1.5;
}
else if (juiceName === 'Tropical Island') {
    timeToMixJuiceResult = 3;
}
else if (juiceName === 'All or Nothing') {
    timeToMixJuiceResult = 5;
}
else {
    timeToMixJuiceResult = 2.5;
}

// Task 2: Replenish the Lime Wedge Supply
let wedgesNeeded = 100;
limes = ['small', 'medium', 'large'];
wedgesCut = 0;
limesCut = 0;
index = 0

while (wedgesCut < wedgesNeeded && limesCut) {
    if(limes[i] == 'small') {
        wedgesCut += 6;
    }
    else if(limes[i] == 'medium') {
        wedgesCut += 8;
    }
    else if(limes[i] == 'large') {
        wedgesCut += 10;
    }
    limes++
    i++
}

// Task 3: Finish Up the Shift
let timeLeft = 50;
let orders = ['Energizer', 'All or Nothing', 'Green Garden', 'Tropical Garden']
let totalTime = 0;
let orderTrack[];

for(let i = 0; i < orders.length; i++) {
    let juice = orders[i];

    if (juice === 'Pure Strawberry Joy') {
        timeToMixJuiceResult = 0.5;
    }
    else if (juice === 'Energizer' || juiceName === 'Green Garden') {
        timeToMixJuiceResult = 1.5;
    }
    else if (juice === 'Tropical Island') {
        timeToMixJuiceResult = 3;
    }
    else if (juice === 'All or Nothing') {
        timeToMixJuiceResult = 5;
    }
    else {
        timeToMixJuiceResult = 2.5;
    }

    orderTrack.push(juice);
    totalTime += timeToMixJuiceResult;
}

console.log(totalTime < timeLeft && i < orderTrack) {
    
}
