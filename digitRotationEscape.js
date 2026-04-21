function getRotation(num) {
  let str = String(num);
  const digitCount = str.length;

  for (let i = 0; i < digitCount; i++) {
    if (Number(str) % digitCount === 0) {
      return i;
    }
    str = str.slice(1) + str[0];
  }

  return "none";
}
