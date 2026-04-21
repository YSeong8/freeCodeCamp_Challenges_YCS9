function findSum(arr, target) {
  function search(startIndex, subset, sum) {
    if (subset.length >= 2 && sum === target) {
      return subset;
    }

    for (let i = startIndex; i < arr.length; i++) {
      const result = search(i + 1, [...subset, arr[i]], sum + arr[i]);
      if (result) {
        return result;
      }
    }

    return null;
  }

  const result = search(0, [], 0);
  return result || "Sum not found";
}
