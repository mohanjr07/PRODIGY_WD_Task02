let startTime;
let running = false;
let interval;
let elapsedTime = 0;

function startStop() {
  if (running === false) {
    startTime = Date.now() - elapsedTime;
    interval = setInterval(updateDisplay, 10);
    document.getElementById("startStop").textContent = "Stop";
    running = true;
  } else {
    clearInterval(interval);
    document.getElementById("startStop").textContent = "Start";
    running = false;
  }
}

function reset() {
  clearInterval(interval);
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("startStop").textContent = "Start";
  running = false;
  elapsedTime = 0;
  document.getElementById("laps").innerHTML = "";
}

function updateDisplay() {
  let currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  let formattedTime = formatTime(elapsedTime);
  document.getElementById("display").textContent = formattedTime;
}

function formatTime(milliseconds) {
  let totalSeconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  let hundredths = Math.floor((milliseconds % 1000) / 10);

  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  hundredths = String(hundredths).padStart(2, "0");

  return ${minutes}:${seconds}:${hundredths};
}

function lap() {
  if (running) {
    let lapTime = elapsedTime;
    let formattedLapTime = formatTime(lapTime);
    let lapItem = document.createElement("li");
    lapItem.textContent = formattedLapTime;
    document.getElementById("laps").appendChild(lapItem);
  }
}