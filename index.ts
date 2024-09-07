let romanNumbers = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

function calculateRomanNumber(numero: string): number | string {
  let array = numero.split('');

  // Variable to store the result
  let result = 0;

  // Loop through the characters in the input string
  for (let i = 0; i < array.length; i++) {
    let currentVal = romanNumbers[array[i] as keyof typeof romanNumbers];
    let nextVal = romanNumbers[array[i + 1] as keyof typeof romanNumbers];

    // If the current value is undefined, it's an invalid Roman numeral
    if (currentVal === undefined) {
      return `Invalid character found: ${array[i]}`;
    }

    // If the next value exists and is greater than the current value, subtract the current value
    if (nextVal !== undefined && nextVal > currentVal) {
      result -= currentVal;
    } else {
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
