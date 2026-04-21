function getLastLetter(str) {
  let maxChar = null;

  for (let char of str) {
    if (/[a-zA-Z]/.test(char)) {
      if (
        maxChar === null ||
        char.toLowerCase() > maxChar.toLowerCase()
      ) {
        maxChar = char;
      }
    }
  }

  return maxChar;
}
