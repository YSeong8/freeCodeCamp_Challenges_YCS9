function palindromeLocator(str) {
  // Check if palindrome
  if (str !== str.split('').reverse().join('')) {
    return "none";
  }

  const len = str.length;
  const mid = Math.floor(len / 2);

  // Odd length → one middle character
  if (len % 2 !== 0) {
    return str[mid];
  }

  // Even length → two middle characters
  return str[mid - 1] + str[mid];
}
