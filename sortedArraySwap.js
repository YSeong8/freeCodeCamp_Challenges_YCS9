function sortAndSwap(arr) {
  const result = [...arr].sort((a, b) => a - b);

  for (let i = 3; i < result.length; i += 3) {
    [result[i - 1], result[i]] = [result[i], result[i - 1]];
  }

  return result;
}
