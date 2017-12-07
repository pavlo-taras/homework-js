/* Task 1 */
var name = prompt("Please enter your name"),
    time = '12:12',
    place = "Lviv",
    event = prompt("Please enter some event");

var result = name + ' has a meeting "' + event + '" today at ' + time + ' somewhere in ' + place + '.'

console.log("result = ", result);

document.write(result);

/* Task 2 */
function enterAmount(name) {

    function isAmountNumber(strAmount) {
        var amount = parseInt(strAmount);
    
        return Number.isInteger(amount) && amount == strAmount && amount > 0;
    }

    var amount;

    do {
        amount = prompt("Enter the amount of money in " + name.toUpperCase(), 0);
    } while (!isAmountNumber(amount));
    
    return amount;
}

function reportAmount (amount, currency) {

    if (amount == 1) {
        return 'one ' + currency.name + ' is equal ' + currency.rate + ' grns';
    } else {
        return amount + ' ' + currency.name + 's are equal ' + (amount * currency.rate).toFixed(2) + ' grns';
    }

    return;
}

var currencies  = {
    euro: {
        name: 'euro',
        rate: 32.03
    },
    dollar: {
        name: 'dollar',
        rate: 27.10
    }
}
    
var amountEuro = enterAmount(currencies.euro.name),
    amountDollar = enterAmount(currencies.dollar.name);

var rateEuroDollar = currencies.euro.rate / currencies.dollar.rate;
var result = reportAmount(amountEuro, currencies.euro) + '\n' + reportAmount(amountDollar, currencies.dollar) + '\n' + 'one euro is equal ' + rateEuroDollar.toFixed(4) + ' dollars';

alert(result);

document.write('<hr>');
document.write('<pre>' + result + '<pre>');