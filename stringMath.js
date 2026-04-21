function doMath(str) {
  const matches = [...str.matchAll(/\d+/g)];
  if (matches.length === 0) return 0;

  let result = Number(matches[0][0]);

  for (let i = 1; i < matches.length; i++) {
    const prev = matches[i - 1];
    const curr = matches[i];

    const prevEnd = prev.index + prev[0].length;
    const gapLength = curr.index - prevEnd;
    const num = Number(curr[0]);

    if (gapLength % 2 === 0) {
      result += num;
    } else {
      result -= num;
    }
  }

  return result;
}
