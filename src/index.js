module.exports = function toReadable(number) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

  if (number < 10) {
    return ones[number];
  } else if (number < 20) {
    return teens[number - 10];
  } else if (number < 100) {
    const tensIndex = Math.floor(number / 10);
    const onesIndex = number % 10;
    return tens[tensIndex] + (onesIndex === 0 ? '' : ' ' + ones[onesIndex]);
  } else if (number < 1000) {
    const hundredsIndex = Math.floor(number / 100);
    const remainder = number % 100;
    return hundreds[hundredsIndex] + (remainder === 0 ? '' : ' ' + toReadable(remainder));
  } else {
    return 'number out of range';
  }
}
