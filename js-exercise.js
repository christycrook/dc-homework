function hello(name) {
    return `Hello, ${name}!`;
}

function hello(name) {
    return 'Hello, ${name}!'
}

function madlib(name, subject) {
    return `${name}'s favorite subject in school is ${subject}.`
}

function tipAmount(billAmount, levelOfService) {
    let GOOD_SERVICE =.20;
    let FAIR_SERVICE = .15;
    let BAD_SERVICE = .10;

    levelOfService = levelOfService || 'fair';

    levelOfService =levelOfService.toUpperCase();
    if (levelOfService == 'GOOD') {
        tipPercentage = GOOD_SERVICE;
    } else if (levelOfService == 'BAD') {
        tipPercentage = BAD_SERVICE;
    } else {
        tipPercentage = FAIR_SERVICE;
    }
    return billAmount * tipPercentage;
}

function totalAmount(billAmount, levelOfService) {
    let tip = tipAmount(billAmount, levelOfService);
    return billAmount + tip;
}

function splitAmount(billAmount, levelOfService, numPeople) {
    let total = totalAmount(billAmount, levelOfService);
    return total / numPeople;
}

console.log(hello('Mustache'));
console.log(hello());

console.log(madlib('Anushka', 'art'));

console.log(tipAmount(100, 'good'));
console.log(tipAmount(40, 'fair'));

console.log(totalAmount(100, 'good'));
console.log(totalAmount(40, 'fair'));

console.log(splitAmount(100, 'good'));
console.log(splitAmount(40, 'fair'));