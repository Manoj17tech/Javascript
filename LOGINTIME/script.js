let logoutTimer;
let countdownTimer;
let timeLeft = 300; // 5 minutes in seconds

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "user" && password === "12345") {
    // Hide login, show main
    document.getElementById("login-page").classList.add("hidden");
    document.getElementById("main-page").classList.remove("hidden");
    document.getElementById("error-msg").classList.add("hidden");

    // Start timers
    startLogoutTimer();
    startCountdown();
  } else {
    document.getElementById("error-msg").classList.remove("hidden");
  }
}

function logout() {
  clearTimeout(logoutTimer);
  clearInterval(countdownTimer);

  // Reset UI
  document.getElementById("main-page").classList.add("hidden");
  document.getElementById("login-page").classList.remove("hidden");

  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("timer").innerText = "Session ends in: 5:00";

  timeLeft = 300; // reset
}

function startLogoutTimer() {
  logoutTimer = setTimeout(() => {
    alert("⏰ Session expired. Please log in again.");
    logout();
  }, 300000); // 5 minutes = 300000 ms
}

function startCountdown() {
  countdownTimer = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("timer").innerText =
      `Session ends in: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeLeft--;

    if (timeLeft < 0) clearInterval(countdownTimer);
  }, 1000);
}
