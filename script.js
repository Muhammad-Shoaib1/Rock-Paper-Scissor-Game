function playGame(user) {
  const choices = ["rock", "paper", "scissors"];
  let CPUI = Math.floor(Math.random() * 3);
  let CPU = choices[CPUI];

  let match = (user, CPU) => {
    if (user === CPU) {
      return "Match Drawn! Try again.";
    } else if (
      (user === "rock" && CPU === "scissors") ||
      (user === "paper" && CPU === "rock") ||
      (user === "scissors" && CPU === "paper")
    ) {
      return "Congratulations! You win.";
    } else {
      return "You Lost! Best of luck next time.";
    }
  };

  let result = match(user, CPU);
  let resultDiv = document.getElementById("result");
  resultDiv.style.opacity = 0;
  setTimeout(() => {
    resultDiv.innerHTML = `
          User: ${user}<br>
          Computer: ${CPU}<br>
          ${result}
        `;
    resultDiv.style.opacity = 1;
  }, 300);
}