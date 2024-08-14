module.exports = function toReadable (number) {
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (number < 10) {
    return ones[number];
  } else if (number < 20) {
    return teens[number - 10];
  } else if (number < 100) {
    const tensNum = Math.floor(number / 10);
    const rest = number % 10;
    return tens[tensNum] + ' ' + ones[rest];
  } else if (number < 1000) {
    const hundreds = Math.floor(number / 100);
    const rest = number % 100;
    if (rest === 0) {
      return ones[hundreds] + ' hundred';
    }
    return ones[hundreds] + ' hundred and ' + toReadable(rest);
  } else {
    return 'Number is too big';
  }
}
