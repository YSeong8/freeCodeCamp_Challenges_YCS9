function getBrowserHistory(commands) {
  const history = [];
  let currentIndex = -1;

  for (const command of commands) {
    if (command === "Back") {
      if (currentIndex > 0) {
        currentIndex--;
      }
    } else if (command === "Forward") {
      if (currentIndex < history.length - 1) {
        currentIndex++;
      }
    } else {
      history.splice(currentIndex + 1);
      history.push(command);
      currentIndex++;
    }
  }

  return [history, currentIndex];
}
