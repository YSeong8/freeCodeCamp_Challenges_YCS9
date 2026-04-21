function isFizzBuzz(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return false;

  const isValidAt = (n, value) => {
    if (n % 15 === 0) return value === "FizzBuzz";
    if (n % 3 === 0) return value === "Fizz";
    if (n % 5 === 0) return value === "Buzz";
    return value === n;
  };

  let start = null;

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (typeof value === "number") {
      start = value - i;
      break;
    }
  }

  if (start === null) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    const n = start + i;
    if (!isValidAt(n, arr[i])) {
      return false;
    }
  }

  return true;
}
