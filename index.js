var romanNumbers = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
function calculateRomanNumber(numero) {
    var array = numero.split('');
    // Variable to store the result
    var result = 0;
    // Loop through the characters in the input string
    for (var i = 0; i < array.length; i++) {
        var currentVal = romanNumbers[array[i]];
        var nextVal = romanNumbers[array[i + 1]];
        // If the current value is undefined, it's an invalid Roman numeral
        if (currentVal === undefined) {
            return "Invalid character found: ".concat(array[i]);
        }
        // If the next value exists and is greater than the current value, subtract the current value
        if (nextVal !== undefined && nextVal > currentVal) {
            result -= currentVal;
        }
        else {
            // Otherwise, add the current value
            result += currentVal;
        }
    }
    return result;
}
// Test the function
console.log('Roman number value: ' + calculateRomanNumber('C')); // 100
console.log('Roman number value: ' + calculateRomanNumber('IX')); // 9
console.log('Roman number value: ' + calculateRomanNumber('XIV')); // 14
console.log('Roman number value: ' + calculateRomanNumber('DXVIII')); // 518
console.log('Roman number value: ' + calculateRomanNumber('MCMXCIV')); // 1994
