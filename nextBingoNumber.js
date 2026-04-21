function getNextBingoNumber(bingo) {
  const letter = bingo[0];
  const number = parseInt(bingo.slice(1), 10);

  const ranges = [
    ["B", 1, 15],
    ["I", 16, 30],
    ["N", 31, 45],
    ["G", 46, 60],
    ["O", 61, 75]
  ];

  for (let i = 0; i < ranges.length; i++) {
    const [currentLetter, min, max] = ranges[i];

    if (letter === currentLetter) {
      if (number < max) {
        return currentLetter + (number + 1);
      } else {
        const nextIndex = (i + 1) % ranges.length;
        return ranges[nextIndex][0] + ranges[nextIndex][1];
      }
    }
  }
}
