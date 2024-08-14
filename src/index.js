module.exports = function toReadable (number) {
  if (number === 0) {
    return 'zero';
  } else if (number < 10 && number >= 1) {
    const ones = [
      ['one', 'two', 'three', 'four', 'five'],
      ['six', 'seven', 'eight', 'nine']
    ];
    return ones[0][number - 1] || ones[1][number - 6];
  } else if (number < 20) {
    const teens = [
      ['ten', 'eleven', 'twelve', 'thirteen'],
      ['fourteen', 'fifteen', 'sixteen', 'seventeen'],
      ['eighteen', 'nineteen']
    ];
    return teens[Math.floor(number / 10)][number % 10];
  } else if (number < 100) {
    const tens = [
      ['twenty', 'thirty', 'forty', 'fifty'],
      ['sixty', 'seventy', 'eighty', 'ninety']
    ];
    return tens[Math.floor(number / 10)][number % 10];
  } else if (number < 1000) {
    const hundreds = [
      'one hundred',
      'two hundred',
      'three hundred',
      'four hundred',
      'five hundred',
      'six hundred',
      'seven hundred',
      'eight hundred',
      'nine hundred'
    ];
    return hundreds[Math.floor(number / 100)] + (number % 100 ? ` ${toReadable(number % 100)}` : '');
  } else if (number < 1000000) {
    const thousands = [
      'one thousand',
      'two thousand',
      'three thousand',
      'four thousand',
      'five thousand',
      'six thousand',
      'seven thousand',
      'eight thousand',
      'nine thousand'
    ];
    return thousands[Math.floor(number / 1000)] + (number % 1000 ? ` ${toReadable(number % 1000)}` : '');
  }
};
