let timeText = document.getElementById("time");
let startTime = document.getElementById("start");
let stopTime = document.getElementById("stop");

let htmlCard = document.getElementById("card")

let stopped = true;


const timer = () => {
    let time = 60;
    setInterval(() => {
        if (stopped === false) {
            if (time > 0) {
                time--;
                document.getElementById("time").innerText = time;   
            } else if (time === 0) {
                htmlCard.innerHTML = "Time is up! Good Job."
                startTime.disabled = false;
            } else {
                return;
            }
        } else {
            time = 60;
            document.getElementById("time").innerText = time;
            return;
        }
    }, 1000);
}
startTime.onclick = () => {
    timer();
    stopped = false;
    startTime.disabled = true
}
stopTime.onclick = () => {
    stopped = true;
    startTime.disabled = false;
}