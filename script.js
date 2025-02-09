let timer;
let running = false;
let seconds = 0, minutes = 0, hours = 0;

const display = document.querySelector(".display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

function updateDisplay() {
    let formattedTime = 
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
    display.textContent = formattedTime;
}

function start() {
    if (!running) {
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
        running = true;
    }
}

function stop() {
    clearInterval(timer);
    running = false;
}

function reset() {
    clearInterval(timer);
    running = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);

updateDisplay();