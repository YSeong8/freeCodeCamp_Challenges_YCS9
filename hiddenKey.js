function decode(str) {
  const key = "VLHCGMDLNH";
  let result = "";
  let keyIndex = 0;

  for (const char of str) {
    if (char === " ") {
      result += " ";
      continue;
    }

    const keyValue = key.charCodeAt(keyIndex % key.length) - 64; // A=1 ... Z=26
    let decodedValue = char.charCodeAt(0) - 65 - keyValue;

    if (decodedValue < 0) {
      decodedValue += 26;
    }

    result += String.fromCharCode(decodedValue + 65);
    keyIndex++;
  }

  return result;
}
