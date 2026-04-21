function fixPrankNumber(arr) {
  const result = [...arr];
  const diffs = [];

  for (let i = 1; i < arr.length; i++) {
    diffs.push(arr[i] - arr[i - 1]);
  }

  // Find the real step (the one that appears most often)
  const counts = {};
  for (const d of diffs) {
    counts[d] = (counts[d] || 0) + 1;
  }

  let step = Number(Object.keys(counts)[0]);
  for (const key in counts) {
    if (counts[key] > counts[step]) {
      step = Number(key);
    }
  }

  // If the last number is wrong
  if (diffs[diffs.length - 1] !== step && diffs[diffs.length - 2] === step) {
    result[result.length - 1] = result[result.length - 2] + step;
    return result;
  }

  // If the first or second number is wrong
  if (diffs[0] !== step && diffs[1] === step) {
    if (arr[2] - arr[0] === 2 * step) {
      result[1] = result[0] + step;
    } else {
      result[0] = result[1] - step;
    }
    return result;
  }

  // Find wrong number in the middle
  for (let i = 1; i < diffs.length; i++) {
    if (diffs[i - 1] !== step) {
      result[i] = result[i - 1] + step;
      return result;
    }
  }

  return result;
}
