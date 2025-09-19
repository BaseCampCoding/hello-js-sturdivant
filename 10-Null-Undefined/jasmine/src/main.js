// Task 1: Create a New Visitor
let visitorName = 'Dani';
let visitorAge = 18;
let visitorTicketId = 'T001';

const visitor = {
    name : visitorName,
    age : visitorAge,
    ticketId : visitorTicketId
}

console.log(visitor);

// Task 2: Revoke the Ticket
visitor.ticketId = null;

console.log(visitor);

// Task 3: Determine the Ticket Status
const tickets = {
    T001 : 'Dani',
    T002 : null,
    T003 : null,
    T004 : null
};

let ticketIdToCheck = 'T006';
let ticketStatusResult;

if (!(ticketIdToCheck in tickets)) {
    ticketStatusResult = 'unknown ticket id';
}
else if (tickets[ticketIdToCheck] === null) {
    ticketStatusResult = 'not sold';
}
else {
    ticketStatusResult = `sold to ${tickets[ticketIdToCheck]}`;
}

console.log(ticketStatusResult)

// Task 4: Improve the Ticket Status Response
let simpleTicketStatusResult;

if (typeof tickets[ticketIdToCheck] === "string" && tickets[ticketIdToCheck].length > 0) {
    simpleTicketStatusResult = tickets[ticketIdToCheck];
}
else {
    simpleTicketStatusResult = 'invalid ticket !!!'
}

console.log(simpleTicketStatusResult)

// Task 5: Determine the Version of Terms and Conditions
const visitorWithGtc = {
    gtc : {
        version : '1.0'
    }
};

let gtcVersion;

if (visitorWithGtc.gtc && visitorWithGtc.gtc.version) {
    gtcVersion = visitorWithGtc.gtc.version;
}

console.log(gtcVersion);