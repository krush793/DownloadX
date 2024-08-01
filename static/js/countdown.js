const countdownTimer = document.querySelector("#countdown_timer"), timeLimit = countdownTimer.textContent;
let timePassed = 0, timeLeft = timeLimit, timerInterval = null, halfTime = 0, request = 0;
timerInterval = setInterval(() => {
    timePassed = timePassed += 1
    timeLeft = timeLimit - timePassed;
    let formatedTime = timeLeft % 60;
    if (formatedTime < 10) {
        halfTime = 1;
        if (request == 1) {
            window.location.href = '/download';
        }
        formatedTime = `0${formatedTime}`;
    }
    countdownTimer.textContent = formatedTime;
    if (0 === timeLeft) {
        document.querySelector("[r]+[r]").style.stroke = "red";
        countdownTimer.textContent = "Wait";
        countdownTimer.style.color = "red";
        clearInterval(timerInterval);
    }
}, 1000)
