function capitalizeFibonacci(str) {
  const fibSet = new Set();
  let a = 0;
  let b = 1;

  while (a < str.length) {
    fibSet.add(a);
    [a, b] = [b, a + b];
  }

  return str
    .split("")
    .map((ch, i) => {
      if (!/[a-zA-Z]/.test(ch)) return ch;
      return fibSet.has(i) ? ch.toUpperCase() : ch.toLowerCase();
    })
    .join("");
}
