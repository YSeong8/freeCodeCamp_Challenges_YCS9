function isValidEquation(equation) {
  const [left, right] = equation.split(" = ");
  const tokens = left.split(" ");

  let values = [Number(tokens[0])];
  let ops = [];

  for (let i = 1; i < tokens.length; i += 2) {
    const op = tokens[i];
    const num = Number(tokens[i + 1]);

    if (op === "*" || op === "/") {
      const prev = values.pop();
      values.push(op === "*" ? prev * num : prev / num);
    } else {
      values.push(num);
      ops.push(op);
    }
  }

  let result = values[0];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === "+") result += values[i + 1];
    else result -= values[i + 1];
  }

  return result === Number(right);
}
