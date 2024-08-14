module.exports = function toReadable (number) {
  if (number === 0) {
    return 'zero';
  }

  const belowTwenty = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const belowHundred = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  function helper(num) {
    if (num < 20) {
      return belowTwenty[num];
    } else if (num < 100) {
      return belowHundred[Math.floor(num / 10)] + (num % 10 !== 0 ? '-' + belowTwenty[num % 10] : '');
    } else {
      return belowTwenty[Math.floor(num / 100)] + ' hundred' + (num % 100 !== 0 ? ' ' + helper(num % 100) : '');
    }
  }

  return helper(number);
}
