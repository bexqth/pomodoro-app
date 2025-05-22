const pomodoroBtn = document.getElementById("pomodoro-button");
const shortBreakBtn = document.getElementById("short-break-button");
const longBreakBtn = document.getElementById("long-break-button");
const timeInput = document.getElementById("time-input");
const playButton = document.getElementById("play-button");
const body = document.getElementById("body");


const pomodoroTime = 25;
const shortBreakTime = 5;
const longBreakTime = 15;
let timerInterval = null;
var currentTimeInSeconds = 0;
var timerRunning = false;
setTime(timeInput.value);

function startTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  timerInterval = setInterval(reduceTime, 1000);
  timerRunning = true;
}

function reduceTime() {
  if (currentTimeInSeconds <= 0) {
    alert("Time's up!");
    stopTimer();
    return;
  }
  
  currentTimeInSeconds--;
  var minutes = Math.floor(currentTimeInSeconds / 60);
  var remainingSeconds = currentTimeInSeconds % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  //timeInput.setAttribute('value', formattedTime);
  timeInput.type = "text";
  timeInput.value = formattedTime;
  timerRunning = true;
}

function stopTimer() {
  if(timerRunning) {
    timerRunning = false
    clearInterval(timerInterval);
    timerInterval = null;
    currentTimeInSeconds = 0;
  }
}


function setTime(time) {
  currentTimeInSeconds = time * 60;
  console.log(currentTimeInSeconds);
}

function setLongBreak() {
  stopTimer();
  timeInput.type = "number";
  playButton.style.backgroundColor = "#f9e79f";
  body.style.backgroundColor = "#f9e79f";
  timeInput.setAttribute('value', longBreakTime);
  timeInput.value = longBreakTime;
  setTime(timeInput.value);
}

function setShortBreak() {
  stopTimer();
  timeInput.type = "number";
  playButton.style.backgroundColor = "#85c1e9";
  body.style.backgroundColor = "#85c1e9"; 
  timeInput.setAttribute('value', shortBreakTime);
  timeInput.value = shortBreakTime;
  setTime(timeInput.value);
}

function setPomodoro() {
  stopTimer();
  timeInput.type = "number";
  playButton.style.backgroundColor = "#ec7063";
  body.style.backgroundColor = "#ec7063"; 
  timeInput.setAttribute('value', pomodoroTime);
  timeInput.value = pomodoroTime;
  setTime(timeInput.value);
}